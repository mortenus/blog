import React from 'react';
import Image from 'next/image';

import BlogWrapper from 'features/Blog/BlogWrapper';

import styles from '../Post.module.scss';
import Link from 'next/link';
import { axios } from 'core';

const info = {
  title:
    'Bridging Borders with Humanity: How Trimsy x Hart Facilitates Humanitarian Aid for Ukrainians',
  headerImg: '/uploads/1556542894645.jpg',
  date: 'April 17, 2023',
  createdAt: '2023-04-12T12:00:00+0000',
  modifiedAt: '2023-04-12T12:00:00+0000',
  minToRead: 2,
  slug: '/blog/bridging-borders-with-humanity-how-trimsy-x-hart-facilitates-humanitarian-aid-for-ukranians',
  description:
    'In a world where crises and conflicts often disrupt the lives of vulnerable populations, the power of human compassion can transcend borders, bringing hope and assistance to those in need.',
  author: {
    fullname: 'Oleksii Pylypenko',
    position: 'CEO',
    description: `I'm a CEO and a Co-Founder of Trimsy. I deeply appreciate the encouragment and
    mutual benefit from the associates I am given a chance to have a journey with. We are
    thinkers and doers, difficulties could be challanging, but that is the beauty of it.
    Doing things with speed does not mean doing them imperfectly, the only way to not fall
    back - is to go forward.`,
    avatarUrl:
      'https://media.licdn.com/dms/image/D4D03AQHHuaDY4z8V7A/profile-displayphoto-shrink_800_800/0/1677288099829?e=1683158400&v=beta&t=_4dL6mKljguP7Bijl5_7Qk60bYUqaOGLI1NvaWdiYJg',
    profileUrl: 'https://www.linkedin.com/in/alexey-pylypenko/',
  },
};

const nextToReadArr = [
  {
    date: 'March 12, 2023',
    title: 'How To Create a Winning Social Media Strategy for Your Website',
    description: `Creating a winning social media strategy is a crucial component of any successful website marketing plan. It gives confident opportunities for a website grown and expansion.`,
    imgUrl: 'https://trimsy.org/uploads/1556542894629.jpg',
    slug: '/blog/how-to-create-a-winning-social-media-strategy',
  },
  {
    date: 'April 10, 2023',
    title: 'Unlocking the Power of Progressive Web Apps: Benefits and Features Explained',
    description: `'PWAs are web applications that combine the capabilities of web technologies with the user experience of native mobile applications.Whilst using PWAs capabilities - it will retain users, not difficult to develop and more.'`,
    imgUrl: 'https://trimsy.org/uploads/1556542894637.jpg',
    slug: '/blog/unlocking-the-power-of-progressive-web-apps',
  },
  {
    date: 'March 9, 2023',
    title: 'Setting Up Google Analytics Fast and Easy',
    description: `Tracking website could give a valuable information on how it is used, how well website keeps visitors on different pages, amd even more. The importance of resource about visitors' actions while interacting with a page could play very important part for any future analysis of website's perfomance or improvements of UI/UX features.`,
    imgUrl: 'https://trimsy.org/uploads/google_analytics_logo.webp',
    slug: '/blog/setting-up-google-analytics-fast-and-easy',
  },
];

Post.title = info.title;
Post.description = info.description;

type TBlog = {
  data: {
    date: string;
    title: string;
    description: string;
    imgUrl: string;
    hashtag: string[];
    fullText: string;
    related: any[];
    summary: string;
  };
  slug: string;
};

type TPost = {
  currentBlog: TBlog;
};

export default function Post({ currentBlog }: TPost) {
  return (
    <BlogWrapper
      info={info}
      summary={currentBlog.data.summary}
      nextToReadArr={currentBlog.data.related}>
      <section className={styles.section}>
        <p>
          In a world where crises and conflicts often disrupt the lives of vulnerable populations,
          the power of human compassion can transcend borders, bringing hope and assistance to those
          in need.
        </p>
        <p>
          Based in Canada, Hart has been working tirelessly to support the humanitarian efforts in
          Ukraine, where the ongoing conflict has resulted in significant challenges for the
          affected population. Hart has been instrumental in providing crucial assistance to those
          displaced by the conflict, including medical supplies, food, and other essentials.
        </p>
        <p>
          With a strong commitment to humanitarian causes, Hart has been partnering with various
          organizations and non-profits. Their mission is to bridge the gap between the generosity
          of the Canadian people and the urgent needs of the Ukrainian population.
        </p>
        <p>
          In the midst of a humanitarian crisis Trimsy and Hart has been at the forefront, playing a
          vital role in facilitating aid for Ukrainians from Canada to Ukraine, helping alleviate
          suffering and providing much-needed support. One of the unique aspects of humanitarian
          efforts is its strategic approach of utilizing Poland as a transit point for aid
          distribution. With a mission to bring humanitarian aid from Canada to Ukraine, Trimsy has
          been making a positive impact to support to Ukrainian communities.
        </p>
      </section>
    </BlogWrapper>
  );
}

export async function getStaticProps() {
  const currentBlog = await axios
    .get(`http://localhost:3001/blog?path=${info.slug}`)
    .then((data) => {
      console.log(data.data);
      return data.data;
    })
    .catch((err) => {
      console.log(err);

      return [];
    });

  // const nextToReadArr = compareBlogPosts(fullText, blogs)

  return {
    props: { currentBlog },
  };
}
