import React from 'react';
import Image from 'next/image';

import BlogWrapper from 'features/Blog/BlogWrapper';

import styles from '../Post.module.scss';
import Link from 'next/link';
import { axios } from 'core';

const info = {
  title: 'Tips for Writing Effective Call-to-Actions (CTAs)',
  headerImg: '/uploads/1556542894644.jpg',
  date: 'April 12, 2023',
  createdAt: '2023-04-12T12:00:00+0000',
  modifiedAt: '2023-04-12T12:00:00+0000',
  minToRead: 4,
  slug: '/blog/tips-for-writing-effective-call-to-actions',
  description:
    'CTAs play a crucial role in the conversion process, as they guide users towards the desired action, helping to drive engagement, generate leads, and ultimately convert users into customers.',
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
          CTAs play a crucial role in the conversion process, as they guide users towards the
          desired action, helping to drive engagement, generate leads, and ultimately convert users
          into customers.
        </p>
        <p>
          They are often used in conjunction with other marketing strategies, such as landing pages,
          email campaigns, social media ads, and content marketing, to drive traffic and
          conversions.
        </p>

        <h3>Overview</h3>
        <p>
          Call-to-Actions (CTAs) are prompts or buttons that encourage users to take a specific
          action, such as signing up for a newsletter, downloading an ebook, making a purchase, or
          contacting a company.
        </p>

        <p>
          CTAs are an essential component of any marketing or advertising strategy, as they help
          guide users through the sales funnel and ultimately lead to conversions. It design to be
          eye-catching and attention-grabbing.
        </p>

        <p>
          Effective CTAs can improve click-through rates, conversion rates, and overall marketing
          success.
        </p>

        <h3>1. Use clear and actionable language</h3>
        <p>
          Your CTA should be straightforward and clearly tell the user what they need to do. Use
          action-oriented language that creates a sense of urgency.
        </p>

        <h5>Keep it Short</h5>
        <p>
          CTAs should be concise and to the point. Avoid lengthy or wordy CTAs that may dilute the
          impact of the message. Short, punchy CTAs are more memorable and effective in driving
          action.
        </p>

        <h5>Use Action-Oriented Language</h5>
        <p>CTAs should use action verbs that prompt users to take immediate action.</p>
        <p>Words like:</p>
        <ul>
          <li>"Shop", "Sign Up",</li>
          <li>"Get", "Download".</li>
        </ul>

        <p>Will convey a sense of urgency and encourage users to take action.</p>

        {/* <div className={styles.img}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '75%', height: 'auto' }}
            src={'/uploads/1556542894638.jpg'}
            alt={'Image'}
            loading={'lazy'}
          />
        </div> */}
        {/* <p className={styles.underline_text}>(bsscommerce)</p> */}

        <h3>2. The message has to be specific</h3>
        <p>Your CTA should have a specific about what user will get when they click on it.</p>
        <p>
          For example, when saying just "Learn more", try to use "Discover 5 Steps to Make Better
          SEO".
        </p>
        <h3>3. Create sense of urgency</h3>
        <p>Super important. It gets along with using clear and actionable language.</p>
        <p>
          Should be clear and easy for user to take urgent action, phrases like: 'Act Now", "Only
          Few Spots Left" or "Limited Time Offer" will incoruage users to instantly click.
        </p>
        <h3>4. Place your CTA strategically</h3>
        <p>The placement of your CTA can have a significant impact on its effectiveness.</p>
        <p>It should be prominently placed on the page and easy to find as:</p>

        <div className={styles.img}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '50%', height: 'auto' }}
            src={'/uploads/1556542894643.jpg'}
            alt={'Image'}
            loading={'lazy'}
          />
        </div>

        <h3>5. Use contrasting colors</h3>
        <p>
          Make sure your CTA stands out of the background. It will make user easy to find and click
          on it.
        </p>

        <h3>Final Thoughts</h3>
        <p>
          Call-to-Actions (CTAs) are powerful tools in any marketing or advertising strategy as they
          guide users towards taking a desired action.
        </p>
        <h5>Test and Optimize</h5>
        <p>
          Testing different CTAs will help you find the best one for you. A/B testing can help you
          determing which language, colors and placement is mostly effective for your audience.
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
