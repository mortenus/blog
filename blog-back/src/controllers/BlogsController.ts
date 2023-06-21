import express from 'express';
import { BlogsModel } from '../Models';

import axios from 'axios';

import compareRelated from '../utils/blog/related';

require('dotenv').config();

// import useGetQuery from '../hooks/useGetQuery';
import { validationResult } from 'express-validator';

type TBlog = {
  data: {
    date: string;
    title: string;
    description: string;
    imgUrl: string;
    hashtag: string[];
    fullText: string;
    related?: any[];
    summary?: string;
  };
  slug: string;
};

const maxItemsPerPage = 7;

class BlogsController {
  //   async getPages(req: express.Request, res: express.Response) {
  // const blogs = new BlogsModel();
  // const itemCount = await blogs.collection.countDocuments();
  // const totalPages = Math.ceil(itemCount / maxItemsPerPage);
  // const customQuery = useGetQuery(req);
  // blogs.collection
  //   .find()
  //   .limit(maxItemsPerPage)
  //   .skip((+customQuery.page - 1) * maxItemsPerPage)
  //   .toArray()
  //   .then((result) => {
  //     const data = {
  //       items: result,
  //       totalPages,
  //     };
  //     res.send(data);
  //   })
  //   .catch((err) => res.status(400).json(err));
  //   }

  //   async get(req: express.Request, res: express.Response) {
  //     const blogs = new BlogsModel();

  //     blogs.collection
  //       .find()
  //       .toArray()
  //       .then((result) => {
  //         res.send(result);
  //       })
  //       .catch((err) => res.status(400).json(err));
  //   }

  async search(req: express.Request, res: express.Response) {
    const searchQuery = String(req.query.q); // Get the search query from the request query parameters

    try {
      const results = await BlogsModel.find(
        { $text: { $search: searchQuery } },
        { score: { $meta: 'textScore' } },
      ).sort({ score: { $meta: 'textScore' } });

      if (results.length > 0) {
        res.json(results);
      } else {
        // No exact match, search for similar or relevant blog posts
        const relevantResults = await BlogsModel.find(
          {
            $or: [
              { fullText: { $regex: searchQuery, $options: 'i' } },
              { title: { $regex: searchQuery, $options: 'i' } },
              { hashtag: { $regex: searchQuery, $options: 'i' } },
            ],
          },
          { 'data.related': 0 },
        );

        res.json(relevantResults);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async get(req: express.Request, res: express.Response) {
    const path = req.query.path;

    const blogPost = await BlogsModel.findOne({ slug: path });

    if (blogPost) {
      // Blog post found, handle the response
      res.json(blogPost);
    } else {
      // Blog post not found, handle the error
      res.status(404).json({ error: 'Blog post not found' });
    }
  }

  async create(req: express.Request, res: express.Response) {
    let postData: TBlog = {
      data: {
        date: req.body.data.date,
        title: req.body.data.title,
        description: req.body.data.description,
        imgUrl: req.body.data.imgUrl,
        hashtag: req.body.data.hashtag,
        fullText: req.body.data.fullText,
      },
      slug: req.body.slug,
    };

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const blogs = new BlogsModel();

    const blogsArr = await blogs.collection
      .find()
      .toArray()
      .then((result) => result)
      .catch(() => []);

    postData.data.related = compareRelated(postData, blogsArr);

    // const response = await axios.post('http://localhost:3003/v1/chat/completions', {
    //     model: 'gpt-3.5-turbo',
    //     messages: [{ role: 'user', content: `Please give me summary and key elements to this article not exceeding 500-800 characters: ${postData.data.description}` }]
    //   }, {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //   .then((response) => response.data.choices[0].message.content)
    //   .catch(() => '');

    //   postData.data.summary = response;

    const blogsWithData = new BlogsModel(postData);

    blogsWithData
      .save()
      .then(async (obj: any) => {
        res.json(obj);

        const response = await axios.post('http://localhost:3003/v1/chat/completions', {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: `Please give me summary and key elements to this article not exceeding 1300 characters: ${obj.data.description}`,
            },
          ],
        });

        const newSummary = response.data.choices[0].message.content;

        const updatedDoc = await BlogsModel.findOneAndUpdate(
          { slug: obj.slug },
          { 'data.summary': newSummary },
          { new: true },
        );
        console.log('Summary updated:', updatedDoc);
      })
      .catch((reason) => {
        res.status(500).json({
          status: 'error with updating the summary of the Blog',
          message: reason,
        });
      });
  }
}

export default BlogsController;
