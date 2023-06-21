import React from 'react';
import Image from 'next/image';

import BlogWrapper from 'features/Blog/BlogWrapper';

import styles from '../Post.module.scss';
import { axios } from 'core';

const info = {
  title: 'How To Create a Winning Social Media Strategy for Your Website',
  headerImg: '/uploads/1556542894629.jpg',
  date: 'March 12, 2023',
  createdAt: '2023-03-12T12:00:00+0000',
  modifiedAt: '2023-03-12T12:00:00+0000',
  minToRead: 6,
  slug: '/blog/how-to-create-a-winning-social-media-strategy',
  description:
    'Creating a winning social media strategy is a crucial component of any successful website marketing plan. It gives confident opportunities for a website grown and expansion.',
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
    date: 'March 2, 2023',
    title: 'How To Improve SEO of your Website in 5 Steps',
    description: `When SEO is set up and used correctly – it could bring lots of new traffic to the web page. It is not complex to accomplish, while optimizing your website could play important part in boosting your search presence. Google receives 90% of all online searches. That’s why we’re going to talk about setting up SEO for Googling and connect to Google Search Console for detailed analysis.`,
    imgUrl: 'https://trimsy.org/uploads/1666542894623.jpg',
    slug: '/blog/how-to-improve-seo-of-your-website-in-5-steps',
  },
  {
    date: 'March 14, 2023',
    title: 'Why Website Security is Important for Your Business',
    description: `Website security is crucial for any business that operates online, regardless of its size or industry. Secure website creates strong connection between the users/audience because trust is one of the main ingredients of successful entity, whether online or offline.`,
    imgUrl: 'https://trimsy.org/uploads/1556542894631.jpg',
    slug: '/blog/why-website-security-is-important-for-your-business',
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
          Creating a winning social media strategy is a crucial component of any successful website
          marketing plan.
        </p>

        <p>It gives confident opportunities for a website grown and expansion.</p>

        <h3>1. Define Your Goals</h3>
        <p>The first step in creating a social media strategy is to define your goals.</p>
        <p>
          With clear goals it is much easier to achieve amazing things. Clear Objectives Narrows
          different paths that could make business go through without need.
        </p>
        <div className={styles.img}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '75%', height: 'auto' }}
            src={'/uploads/1556542894628.jpg'}
            alt={'Image'}
            loading={'lazy'}
          />
        </div>
        <p className={styles.underline_text}>(Shutterstock)</p>
        <h5>What do you want to achieve?</h5>
        <ul>
          <li>Website Traffic?</li>
          <li>Lead Generation?</li>
          <li>Build brand awareness?</li>
        </ul>

        <p>Clear goals will help you guide the rest of the social media strategy.</p>

        <h3>2. Identify Targeted Audience</h3>
        <p>
          Understanding your target audience will help you choose the right social media platforms
          to focus on and create content that resonates with them .
        </p>

        <h5>To undetify target audience we should use these questions:</h5>
        <ul>
          <li>Who are my target customers?</li>
          <li>What social media platforms do they use?</li>
        </ul>
        <p>These answers are going to help while moving any further of this blog.</p>

        <h3>3. Choose Social Media Platforms</h3>
        <p>
          Once targeted audience is known, choose the social media platforms that are most relevant
          to them.
        </p>
        <p>
          For example, if your target audience is primarily professionals, then LinkedIn may be a
          better choice than Instagram.
        </p>

        <h3>4. Develop Content Strategy</h3>
        <p>
          Content Strategy should include the types of content you will create and share, the
          frequency of posting, and the tone and style of the content.
        </p>
        <p>Please, consider the type of content that perfoms well on each platform.</p>

        <h3>5. Create a Posting Schedule</h3>
        <p>
          Creating a social media posting schedule will insure that your company consistently post
          content.
        </p>

        <div className={styles.img}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '75%', height: 'auto' }}
            src={'/uploads/1556542894630.jpg'}
            alt={'Image'}
            loading={'lazy'}
          />
        </div>
        <p>Consistency is the key in growing solid social media presence.</p>
        <p>Determine how often your company will post.</p>

        <div className={styles.note}>
          <span>
            Important to know what time is the best to make a post for your audience to see.
          </span>
          <br />
          <br />
          <span>
            {`Posting at the wrong time could lead to being in the bottom of all the new posts that other's has made.`}
          </span>
        </div>

        <h3>6. Engage with Your Audience</h3>
        <p>Social media is a two-way conversation.</p>
        <p>Engage with your audience by responsing to comments, messages and mentions.</p>
        <p>This helps build relationships and increases brand loyalty.</p>

        <h3>7. Measure and Analyze Your Results</h3>
        <p>{`Finally, measuring and analyzing social media results regularly will give a taste of what's working and what's not.`}</p>

        <p>
          Using analytics tools to track engagement, traffic, and conversions from social media will
          help improving your social media strategy.
        </p>

        <h3>Final thoughts</h3>
        <p>
          While creating strong goals, defining the presence in social media, measuring and
          analyzing the progress will result in inevitable progression.
        </p>
        <p>
          Following each step creates a winning social media strategy that drives traffic to your
          website, builds brand awareness, and engages your target audience.
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
