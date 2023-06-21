import express from 'express';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';

import { UserModel } from '../Models';
import createJWTToken from '../utils/createJWTToken';

// Google stuff
// const { google } = require('googleapis');
// const { OAuth2 } = google.auth;

// const CLIENT_ID = '1019493490840-i0ktv84as8jmgpr0ascha4877npt9s8m.apps.googleusercontent.com';
// const CLIENT_SECRET = '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';
// const REDIRECT_URI = 'http://localhost:3001/user/google/callback';

// const oAuth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

class UserController {
  // constructor() {
  //     io.on("connection", function(socket: any) {
  //         socket.on('', function(obj: any) {
  //             ...
  //         })
  //     })
  // }

  show = (req: express.Request, res: express.Response) => {
    const id: string = req.params.id;
    UserModel.findById(id, (err: any, user: any) => {
      if (err) {
        return res.status(404).json({
          message: 'User not found',
        });
      }
      res.json(user);
    });
  };

  getMe = (req: any, res: express.Response) => {
    const id: string = req.user._id;
    UserModel.findById(id, (err: any, user: any) => {
      if (err || !user) {
        return res.status(404).json({
          message: `User not found ${req.user._id}, ${id}, ${req.user}`,
        });
      }
      res.json(user);
    });
  };

  findUsers = (req: any, res: express.Response) => {
    const query: string = req.query.query;
    console.log(query);
    UserModel.find()
      .or([{ fullname: new RegExp(query, 'i') }, { email: new RegExp(query, 'i') }])
      .then((users: any) => res.json(users))
      .catch((err: any) => {
        return res.status(404).json({
          status: 'error',
          message: err,
        });
      });
  };

  delete = (req: express.Request, res: express.Response) => {
    const id: string = req.params.id;
    UserModel.findOneAndRemove({ _id: id })
      .then((user) => {
        if (user) {
          res.json({
            message: `User ${user.fullname} deleted`,
          });
        }
      })
      .catch(() => {
        res.json({
          message: `User not found`,
        });
      });
  };

  create = (req: express.Request, res: express.Response) => {
    const postData = {
      email: req.body.email,
      fullname: req.body.fullname,
      password: req.body.password,
    };

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const user = new UserModel(postData);

    user
      .save()
      .then((obj: any) => {
        res.json(obj);
      })
      .catch((reason) => {
        res.status(500).json({
          status: 'error',
          message: reason,
        });
      });
  };

  verify = (req: express.Request, res: express.Response) => {
    const hash = req.query.hash;

    if (!hash) {
      return res.status(422).json({ errors: 'Invalid hash' });
    }

    UserModel.findOne({ confirm_hash: hash }, (err: any, user: any) => {
      if (err || !user) {
        return res.status(404).json({
          status: 'error',
          message: 'Hash not found',
        });
      }

      user.confirmed = true;
      user.save((err: any) => {
        if (err) {
          return res.status(404).json({
            status: 'error',
            message: err,
          });
        }

        res.json({
          status: 'success',
          message: 'Аккаунт успешно подтвержден',
        });
      });
    });
  };

  login = (req: express.Request, res: express.Response) => {
    const postData = {
      email: req.body.email,
      password: req.body.password,
    };

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    UserModel.findOne({ email: postData.email }, (err: any, user: any) => {
      if (err || !user) {
        return res.status(404).json({
          message: 'User not found',
        });
      }

      if (bcrypt.compareSync(postData.password, user.password)) {
        const token = createJWTToken(user);

        return res.json({
          status: 'success',
          token,
        });
      } else {
        return res.status(403).json({
          status: 'error',
          message: 'Incorrect password or email',
        });
      }
    });
  };

  addFavoriteBlog = async (req: any, res: express.Response) => {
    const { slug } = req.body;
    console.log(req.body);

    const userId: string = req.user._id;

    try {
      const user = await UserModel.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Check if the blog is already in favorites
      if (user.favoriteBlogs.includes(slug)) {
        user.favoriteBlogs = user.favoriteBlogs.filter((favorite) => favorite !== slug);
        await user.save();
        return res.json({ status: 'success', message: 'Blog removed from favorites' });
      }

      // Add the blog slug to the favorites array
      user.favoriteBlogs.push(slug);
      await user.save();

      res.json({ status: 'success', message: 'Blog added to favorites' });
    } catch (error) {
      console.error('Error adding blog to favorites:', error);
      res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
  };

  // Google

  //   google = async (req: express.Request, res: express.Response) => {
  //     try {
  //       const url = oAuth2Client.generateAuthUrl({
  //         scope: [
  //           'https://www.googleapis.com/auth/userinfo.email',
  //           'https://www.googleapis.com/auth/userinfo.profile',
  //         ],
  //       });

  //       res.redirect(url);
  //     } catch (error) {
  //       console.error('Error during Google authentication:', error);
  //       res.status(500).json({ error: 'Internal Server Error' });
  //     }
  //   };

  //   googleRedirect = async (req: express.Request, res: express.Response) => {
  //     const { code } = req.query;

  //     const { tokens } = await oAuth2Client.getToken(code);
  //     oAuth2Client.setCredentials(tokens);

  //     const { data } = await google.people({ version: 'v1', auth: oAuth2Client }).people.get({
  //       resourceName: 'people/me',
  //       personFields: 'names,emailAddresses',
  //     });

  //     const googleId = data.resourceName;
  //     const fullname = data.names[0].displayName;
  //     const email = data.emailAddresses[0].value;

  //     // Create or update the user in the MongoDB database
  //     await UserModel.findOneAndUpdate(
  //       { googleId },
  //       { fullname, email, password: googleId, confirmed: true },
  //       { upsert: true, new: true },
  //     )
  //       .then((user) => {
  //         res.json(user);
  //       })
  //       .catch((err) =>
  //         res.status(404).json({
  //           status: 'Error',
  //           message: err,
  //         }),
  //       );
  //   };
}

export default UserController;
