import React from 'react';
import Image from 'next/image';

import BlogWrapper from 'features/Blog/BlogWrapper';

import styles from '../Post.module.scss';
import Link from 'next/link';
import { axios } from 'core';

const info = {
  title: 'Unlocking the Power of Progressive Web Apps: Benefits and Features Explained',
  headerImg: '/uploads/1556542894637.jpg',
  date: 'April 10, 2023',
  createdAt: '2023-04-10T12:00:00+0000',
  modifiedAt: '2023-04-10T12:00:00+0000',
  minToRead: 5,
  slug: '/blog/unlocking-the-power-of-progressive-web-apps',
  description:
    'PWAs are web applications that combine the capabilities of web technologies with the user experience of native mobile applications.Whilst using PWAs capabilities - it will retain users, not difficult to develop and more.',
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
    date: 'March 9, 2023',
    title: 'Setting Up Google Analytics Fast and Easy',
    description: `Tracking website could give a valuable information on how it is used, how well website keeps visitors on different pages, amd even more. The importance of resource about visitors' actions while interacting with a page could play very important part for any future analysis of website's perfomance or improvements of UI/UX features.`,
    imgUrl: 'https://trimsy.org/uploads/google_analytics_logo.webp',
    slug: '/blog/setting-up-google-analytics-fast-and-easy',
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
          PWAs are web applications that combine the capabilities of web technologies with the user
          experience of native mobile applications.
        </p>

        <p>
          Whilst using PWAs capabilities - it will retain users, not difficult to develop and more.
        </p>

        <h3>What is Progressive Web Apps (PWAs)?</h3>
        <p>
          Progressive Web Apps (PWAs) are web applications that combine native mobile applications'
          user experience with capabilities of web technologies. Basically, web applications that
          look and feel like native mobile apps.
        </p>
        <p>
          Any device or platform that uses a standards-complaint web browser, including desktops,
          smartphones and tablets can be used with PWAs.
        </p>

        <h4>In Depth</h4>
        <p>
          They can be installed on the user's device like a native app. Which means they can work
          offline or with poor internet connection.
        </p>
        <div className={styles.img}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '75%', height: 'auto' }}
            src={'/uploads/1556542894638.jpg'}
            alt={'Image'}
            loading={'lazy'}
          />
        </div>
        <p className={styles.underline_text}>(bsscommerce)</p>

        <p>
          Allowing users to access content and functionalities even without the stable connection to
          the network is made possible through the use of Service Workers, which are scripts that
          run in the background and can intercept network requests, cache content, and respond to
          user actions even when there is no network connection.
        </p>

        <h4>Benefits of using PWA:</h4>
        <p>
          Overall, it offers many benefits for businesses and users alike. While becoming
          increasingly popular as a way to deliver mobile experiences.
        </p>
        <h5>Increased Reach</h5>
        <p>
          PWAs can be accessed from any device with a web browser, allowing businesses to reach a
          wider audience.
        </p>
        <p>
          Unlike native apps, PWAs don't require users to download and install an app from an app
          store, which can be a barrier to entry for some users.
        </p>
        <p>
          PWAs can also be shared easily through links or social media, making it easier for
          businesses to promote their products or services.
        </p>

        <h5>It's Modern!</h5>

        <p>
          PWAs use modern web technologies to provide reliable, engaging and fast user experience,
          such as:
        </p>

        <ul>
          <li>Service Workers</li>
          <li>Web Push Notifications</li>
          <li>Web App Manifest</li>
        </ul>

        <p>
          Web App Manifests are another key component of PWAs. A manifest is a JSON file that
          provides information about the app, such as its name, icons, and display mode. By
          including a manifest in the app, developers can ensure that it looks and behaves like a
          native app when installed on a user's device.
        </p>

        <h5>SEO Benefits</h5>
        <p>
          Since PWAs are web applications, they can be indexed by search engines, making it easier
          for users to find them. This can help businesses increase their visibility and drive more
          traffic to their website.
        </p>
        <p>
          More about{' '}
          <Link href="/blog/how-to-improve-seo-of-your-website-in-5-steps">
            SEO and How To Improve it on Your Website
          </Link>
          .
        </p>

        <h5>Cost-effective</h5>
        <p>
          Developing and maintaining native apps can be expensive, particularly if businesses need
          to create separate versions for different platforms.
        </p>
        <p>
          PWAs, on the other hand, can be built using web technologies that are widely available and
          well-understood, reducing development costs.
        </p>
        <p>
          PWAs can also be updated and maintained more easily than native apps, since there's no
          need to go through the app store approval process.
        </p>

        <h3>Examples of Progressive Web Apps:</h3>
        <h4>1. Uber</h4>
        <div className={styles.img}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '75%', height: 'auto' }}
            src={'/uploads/1556542894639.jpg'}
            alt={'Image'}
            loading={'lazy'}
          />
        </div>
        <p>
          Uber's PWA offers a streamlined experience for requesting rides and tracking their
          progress, with features such as real-time updates and location tracking.
        </p>

        <h4>2. Flipboard</h4>
        <div className={styles.img}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '75%', height: 'auto' }}
            src={'/uploads/1556542894640.jpg'}
            alt={'Image'}
            loading={'lazy'}
          />
        </div>
        <p>
          Flipboard's PWA offers a fast and engaging experience for browsing news and other content,
          with features such as offline mode and push notifications.
        </p>

        <h4>3. Pinterest</h4>
        <div className={styles.img}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '75%', height: 'auto' }}
            src={'/uploads/1556542894641.jpg'}
            alt={'Image'}
            loading={'lazy'}
          />
        </div>
        <p>
          Pinterest's PWA offers a fast and engaging user experience, with features such as push
          notifications and an immersive full-screen mode.
        </p>

        <h4>4. Starbucks</h4>
        <div className={styles.img}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '75%', height: 'auto' }}
            src={'/uploads/1556542894642.jpg'}
            alt={'Image'}
            loading={'lazy'}
          />
        </div>
        <p>
          Starbucks' PWA allows users to order ahead and pay using their mobile device, as well as
          providing features such as store locator and menu browsing.
        </p>

        <h3>Final Thoughts</h3>

        <p>
          Progressive Web Apps are still a relatively new technology, and there are some limitations
          to what they can do compared to native apps.
        </p>
        <p>
          For example, they may not have access to all of the hardware features of a device, such as
          the camera or accelerometer.
        </p>
        <p>
          However, as the technology continues to evolve, it's likely that more and more
          functionality will be added to PWAs, making them an even more compelling option for
          developers and businesses alike.
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
