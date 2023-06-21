import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import BlogWrapper from 'features/Blog/BlogWrapper';

import styles from '../Post.module.scss';
import { axios } from 'core';

const info = {
  title: 'Setting Up Google Analytics Fast and Easy',
  headerImg: '/uploads/google_analytics_logo.webp',
  date: 'March 09, 2023',
  createdAt: '2023-03-09T12:00:00+0000',
  modifiedAt: '2023-03-09T12:00:00+0000',
  minToRead: 4,
  slug: '/blog/setting-up-google-analytics-fast-and-easy',
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
  description:
    'When SEO is set up and used correctly – it could bring lots of new traffic to the web page. It is not complex to accomplish, while optimizing your website could play important part in boosting your search presence. Google receives 90% of all online searches. That’s why we’re going to talk about setting up SEO for Googling and connect to Google Search Console for detailed analysis.',
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
    date: 'March 12, 2023',
    title: 'How To Create a Winning Social Media Strategy for Your Website',
    description: `Creating a winning social media strategy is a crucial component of any successful website marketing plan. It gives confident opportunities for a website grown and expansion.`,
    imgUrl: 'https://trimsy.org/uploads/1556542894629.jpg',
    slug: '/blog/how-to-create-a-winning-social-media-strategy',
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
          Tracking website could give a valuable information on how it is used, how well website
          keeps visitors on different pages, amd even more.
        </p>

        <p>{`The importance of resource about visitors' actions while interacting with a page could play very important part for any future analysis of website's perfomance or improvements of UI/UX features.`}</p>

        <h3>Overview</h3>
        <p>
          Google Analytics, is a web analytics service provided by Google that allows website owners
          to track and analyze website traffic and user behavior.
        </p>
        <p>
          It provides information such as the number of visitors, pages they visit, how long they
          stay on each page, their approximate location and also device information.
        </p>
        <p>
          Website owners can use this data to optimize their website, improve user experience, and
          increase conversions.
        </p>

        <div className={styles.note}>
          <span>
            Notice: While connecting a Google Analytics to a website or mobile app user should be
            informed that the data of his/her actions is being stored and going to be used in the
            future. The information includes location of the user, the pages visited and more.
          </span>
        </div>

        <h4>Signing Up for Google Analytics</h4>
        <p>
          First we need to sign up{`  `}
          <Link href="https://analytics.google.com/analytics/web/">at Google Analytics site.</Link>
        </p>
        <p>If you have a Google account, you can use it to sign up for Analytics.</p>
        <p>
          Ensure to use well secured Google Account to defend the information that is being
          collected and to keep it safe for the future.
        </p>

        <h4>Create a new property</h4>
        <p>{`Once signed up for Google Analytics, we'd need to create a new property.`}</p>
        <p>{`To do this, click on the "Start Measuring". Follow the prompts to enter your website's information with setting up Account Details.`}</p>

        <div className={styles.img}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            src={'/uploads/1556542894625.jpg'}
            alt={'Image'}
            loading={'lazy'}
          />
        </div>

        <h5>Property</h5>

        <p>
          Property is a website or mobile app that is going to be tracked by a unique tracking ID.
          Basically it represents the digital entity to analyze data.
        </p>

        <p>
          Each Property can have multiple views, which are different ways to look at the data
          collected by the tracking ID.
        </p>

        <h4>Add the tracking code to your website</h4>

        <p>After creating a new property, Google will generate and hand a tracking code.</p>
        <p>
          This code needs to be added to every page of your website so that Google Analytics can
          track your vistors.
        </p>
        <p>{`The code can be added to website's HTML code in the <head> tag.`}</p>

        <h4>Verify tracking</h4>
        <p>
          After adding the tracking code to a website, it should be clear that it is working
          properly.
        </p>
        <p>{`To track a real time users, that are on the website right now proceed to "Reports"`}</p>

        <Image
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: '25%', height: 'auto' }}
          src={'/uploads/1556542894626.jpg'}
          alt={'Image'}
          loading={'lazy'}
        />
        <p>{`Then "Real Time":`}</p>
        <Image
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: '25%', height: 'auto' }}
          src={'/uploads/1556542894627.jpg'}
          alt={'Image'}
          loading={'lazy'}
        />
        <p>{`Maybe there isn't anyone on the website right now, so it might be good idea to open the website in a new tab and browse around, new activity should appear in the Real Time report in Google Analytics.`}</p>

        <div className={styles.note}>
          <span>
            Worth noting that Ad Blockers will suppress any requests to the Google Analytics. <br />
            <br />
            That is why some data may be lost. Nevertheless not many people use ad blocker on
            phones, while{' '}
            <Link href="https://earthweb.com/how-many-people-use-ad-blockers/" target={'_blank'}>
              around 40% of users are using it on laptops and computers.
            </Link>
          </span>
        </div>

        {/* <h4>Goals and Conversion tracking</h4>
            <p>
              Once tracking code is working correctly, setting up goals and conversion tracking
              might be a good idea.
            </p>
            <p>
              Goals allow to track specific actions on your website, such as form submissions or
              product purchases.
            </p>
            <p>
              Conversion tracking allows you to track the success of your marketing campaigns by
              measuring the number of conversions they generate.
            </p>
            <p>
              More about this topic is discussed in another blog <Link href="#">here.</Link>
            </p> */}

        <h3>Bottom Line</h3>
        <p>
          {`Setting up Google Analytics for your website can be a powerful tool to track user' behaviour and more for future analysis of website's perfomance, which could play important part in the future.`}
        </p>
        <p>
          Important piece is to inform your visitors about what data you are collecting and what
          for, so there would be no legal issues any futher.
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
