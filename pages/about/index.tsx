import { Button, ImageUnoptimized, SwiperSmall } from 'components';
import CommunityItem from 'features/About/community/Item';
import IntroItem from 'features/About/Intro/Item';
import Head from 'next/head';
import React from 'react';

import styles from './about.module.scss';

const itemArr = [
  {
    number: 18,
    title: 'Successful fulfillment of orders',
  },
  {
    number: 1,
    title: 'years of experience',
  },
  {
    number: 5,
    title: 'collaborations a week',
  },
];

About.title = 'About us';

export default function About({ items }: any) {
  return (
    <>
      {/* <h1 className={'hidden'}>About Us | Trimsy</h1> */}
      <section className={styles.introWrap}>
        <div className="global-wrapper ">
          <div className={styles.intro}>
            <h2>About the Project</h2>
          </div>
          <div className={styles.platform}>
            <div className={styles.platform_text}>
              <h4>Hi!</h4>
              <h4>Trismy Blog was created for the purpose of teaching everything about Web.</h4>
              <h4>Wheather you're looking for answers or have interest in the topic, welcome!</h4>
            </div>
          </div>

          <div className={styles.blocks}>
            {itemArr.map((item) => (
              <IntroItem key={item.title} {...item} />
            ))}
          </div>
        </div>

        <div className={styles.background}>
          <ImageUnoptimized
            src={'/static/img/about/background.jpg'}
            fill
            priority
            alt={'Intro Image'}
          />
        </div>
        <div className={styles.vision}>
          <div className={'global-wrapper'}>
            <h3>Vision</h3>
            <h5>
              Our goal is to build long-term relationships with our clients based on trust,
              transparency, and effective communication, and to help them achieve their business
              objectives through effective web development strategies and solutions.
            </h5>
            <h5>
              We foster a collaborative and creative work environment that attracts and retains top
              talent, and we are committed to continuously improving our skills and knowledge to
              stay ahead of the curve in the ever-evolving web development industry.
            </h5>
            <h5>Our team will take your ideas and make it happen.</h5>
          </div>
        </div>
      </section>
      <section className={styles.community}>
        <div className={styles.text}>
          <h2>Community Involvement</h2>
          <p>We’re committed to making a difference in the communities where we operate.</p>
          <p>
            We believe that being actively involved in our community is an important part of who we
            are as a business, and we will continue to seek out ways to give back and make a
            positive impact.
          </p>
        </div>
        <div className={styles.items}>
          <CommunityItem />
        </div>
      </section>
      {/* <SwiperSmall items={items} /> */}
      <Head>
        <meta content={'https://trimsy.org/images/mini-logo.png'} property="og:image" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          async
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LocalBusinessSchema) }}
        />
      </Head>
    </>
  );
}

const LocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Trimsy',
  description: 'Discover your presence in Web the way you want.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Tanner Close',
    addressLocality: 'Airdrie',
    postalCode: 'T4A 2L4',
    addressCountry: 'Canada',
  },
  image: 'https://trimsy.org/images/mini-logo.png',
};

export async function getStaticProps() {
  const items = [
    {
      data: {
        date: 'April 17, 2023',
        title:
          'Bridging Borders with Humanity: How Trimsy x Hart Facilitates Humanitarian Aid for Ukrainians',
        imgUrl: '/uploads/1556542894645.jpg',
      },
      modal:
        '/blog/briding-borders-with-humanity-how-trimsy-x-hart-facilitates-humanitarian-aid-for-ukranians',
      slug: '/blog/briding-borders-with-humanity-how-trimsy-x-hart-facilitates-humanitarian-aid-for-ukranians',
      type: 'QUICK READ',
    },
    {
      data: {
        date: 'March 14, 2023',
        title: 'Website Security: How to Protect Your Website and Gain a Competitive Edge',
        description:
          'Website security is crucial for any business that operates online, regardless of its size or industry. Secure website creates strong connection between the users/audience because trust is one of the main ingredients of successful entity, whether online or offline.',
        imgUrl: 'https://trimsy.org/uploads/1556542894631.jpg',
        hashtags: ['Web', 'Dev', 'Security'],
      },
      slug: '/blog/website-security-how-to-protect-your-website-and-gain-a-comptetive-edge',
    },
    {
      data: {
        date: 'March 12, 2023',
        title: 'How To Create a Winning Social Media Strategy for Your Website',
        description:
          'Creating a winning social media strategy is a crucial component of any successful website marketing plan. It gives confident opportunities for a website grown and expansion.',
        imgUrl: 'https://trimsy.org/uploads/1556542894629.jpg',
        hashtags: ['Web', 'Social Media'],
      },
      slug: '/blog/how-to-create-a-winning-social-media-strategy',
    },
    {
      data: {
        date: 'March 9, 2023',
        title: 'Setting Up Google Analytics Fast and Easy',
        description:
          "Tracking website could give a valuable information on how it is used, how well website keeps visitors on different pages, amd even more. The importance of resource about visitors' actions while interacting with a page could play very important part for any future analysis of website's perfomance or improvements of UI/UX features.'",
        imgUrl: 'https://trimsy.org/uploads/google_analytics_logo.webp',
        hashtags: ['Web', 'Dev'],
      },
      slug: '/blog/setting-up-google-analytics-fast-and-easy',
    },
    {
      data: {
        date: 'March 2, 2023',
        title: 'How To Improve SEO of your Website in 5 Steps',
        description:
          'When SEO is set up and used correctly – it could bring lots of new traffic to the web page. It is not complex to accomplish, while optimizing your website could play important part in boosting your search presence. Google receives 90% of all online searches. That’s why we’re going to talk about setting up SEO for Googling and connect to Google Search Console for detailed analysis.',
        imgUrl: 'https://trimsy.org/uploads/1666542894623.jpg',
        hashtags: ['Web', 'Dev'],
      },
      slug: '/blog/how-to-improve-seo-of-your-website-in-5-steps',
    },
  ];

  return {
    props: { items },
  };
}
