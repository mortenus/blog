import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import BlogWrapper from 'features/Blog/BlogWrapper';

import styles from '../Post.module.scss';
import { axios } from 'core';

const info = {
  title: 'Maximizing Website Performance with CDN: Benefits and Advantages',
  headerImg: '/uploads/1556542894636.png',
  date: 'April 1, 2023',
  createdAt: '2023-04-0T12:00:00+0000',
  modifiedAt: '2023-04-20T12:00:00+0000',
  minToRead: 6,
  slug: '/blog/maximizing-website-performance-with-cdn',
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
    'A content delivery network (CDN) is a widely recognized solution that helps to improve website performance. By distributing website content across multiple servers around the globe, a CDN enhances website speed, security, and reliability.',
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
          A content delivery network (CDN) is a widely recognized solution that helps to improve
          website performance.
        </p>
        <p>
          When maintaining a website, it is eassential to keep it safe and fast-loading. To resolve
          these main two problems, the CDN comes in.
        </p>

        <p>
          The discussion is going to be about Content Delivery Network. What is used for, what is
          under the hood and more.
        </p>

        <h3>About CDN</h3>
        <p>
          A CDN, or Content Delivery Network, is a distributed network of servers that work together
          to deliver content to users around the world.
        </p>
        <p>
          Servers are typically located in various geographic locations, allowing content to be
          cached closer to end-users, resulting in faster delivery of content and lower latency.
        </p>
        <div className={styles.img}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            src={'/uploads/1666542894625.png'}
            alt={'Image'}
          />
        </div>
        <p className={styles.underline_text}>(cloudflare)</p>

        <p>
          {`When a user requests content from a website or application, the CDN will direct the user's request to the closest server that has a cached copy of the content. This reduces the distance the content has to travel and highly improves the overall perfomance of the website application.`}
        </p>
        <p>
          CDNs are commonly used to deliver large files such as images, videos, and software
          downloads, as well as static content such as HTML pages and CSS files. They can also help
          protect websites from DDoS attack by distributing traffic across multiple servers and
          provdiing additional layers of securiy. More about Securing a website is in other post{' '}
          <Link href="http://localhost:3000/blog/why-website-security-is-important-for-your-business">
            here
          </Link>
          .
        </p>

        <h3>How CDN Improves Perfomance</h3>
        <p>
          One of the main advantages of using a CDN is improved website speed. By caching and
          delivering content from the server closest to the user, a CDN reduces latency and
          decreases page load times, resulting in a faster and more responsive website experience.
        </p>
        <p>
          Content Delivery Network is design to bring only the best by distributing its servers
          across the globe.
        </p>

        <p>
          While reducing the latency and network congestion that can occur when users access content
          from a central server located in one physical location improves perfomance of any website.
        </p>

        <h4>1. Caching</h4>
        <p>
          CDN makes caching easy by storing website content on multiple servers located in different
          geographic regions, which can be easily accessed by users. Caching involves temporarily
          storing frequently accessed website content on the user's device or on the server.
        </p>
        <p>
          By doing so, subsequent requests for the same content can be served faster, improving
          website speed and user experience.
        </p>
        <p>
          With a CDN, website content is automatically cached on the CDN's servers when it is first
          accessed. When a user requests the same content again, the CDN's server closest to the
          user can serve the content from its cache, rather than fetching it from the website's
          origin server.
        </p>
        <p>
          This reduces the distance the data needs to travel, resulting in faster page load times
          and a smoother user experience.
        </p>
        <p>
          Moreover, a CDN's caching capabilities can be customized to suit a website's specific
          needs. For example, website owners can choose how long content should be cached on the
          CDN's servers before it expires, as well as which types of content should be cached. This
          can help optimize website performance and improve user experience.
        </p>
        <p>
          Additionally, CDNs can use advanced caching techniques such as dynamic caching and edge
          caching. Dynamic caching involves caching content that changes frequently, such as social
          media feeds or real-time data. Edge caching involves caching content on the CDN's servers
          located at the edge of the network, which are closest to the user. This can reduce latency
          even further, resulting in faster page load times.
        </p>

        <h4>2. Reduced latency</h4>
        <p>
          Reducing latency is one of the main advantages of using a CDN. Latency refers to the time
          it takes for a user's device to send a request to a website's server and receive a
          response. When latency is high, it can result in slow page load times and a poor user
          experience.
        </p>
        <p>
          A CDN can reduce latency by caching website content on multiple servers located in
          different geographic regions. When a user requests website content, the CDN's server
          closest to the user can serve the content from its cache, rather than fetching it from the
          website's origin server. This reduces the distance the data needs to travel, resulting in
          faster page load times and a smoother user experience.
        </p>

        <h4>3. Scalability</h4>
        <p>CDNs can handle large volumes of traffic without overloading the oirgin server.</p>
        <p>
          By distribuing the load across multiple servers, CDNs can handle sudden spikes in traffic
          without impacting website perfomance.
        </p>

        <h4>4. DDoS protection</h4>
        <p>
          When a website experiences a distributed denial-of-service (DDoS) attack, it means that a
          large number of requests are sent to the website's server, causing it to overload and
          potentially crash. This can result in the website being unavailable to users, which can
          harm a business's reputation and revenue.
        </p>
        <p>
          One way to mitigate the effects of a DDoS attack is by using a CDN. A CDN spreads traffic
          across multiple servers located in different geographic regions, so when a user requests
          to access the website, the request is directed to the server closest to the user. This not
          only reduces latency and improves website speed but also ensures that traffic is spread
          out across multiple servers.
        </p>
        <p>
          In the event of a DDoS attack, a CDN can detect the surge in traffic and distribute it
          across multiple servers, which can handle the load and prevent any one server from being
          overwhelmed. Additionally, a CDN can filter out malicious traffic, blocking any requests
          that are deemed suspicious or harmful. This can help keep a website online and protect it
          from cyber attacks.
        </p>
        <p>
          CDNs can help protect website from DDoS attacks by spreading the traffic across multiple
          servers and filtering out malicious traffic.
        </p>

        <p>
          CDN also enhances website security by mitigating cyber-attacks, particularly distributed
          denial-of-service (DDoS) attacks that can cripple a website by overloading the servers. A
          CDN spreads traffic across multiple servers, ensuring that a website can withstand a
          massive traffic surge and stay online.
        </p>

        <h3>Conclusion</h3>
        <p>
          CDN is a powerful tool that can help businesses improve website performance, security,
          reliability, and save money.
        </p>
        <p>
          By using a CDN, businesses can enhance their users' experience, boost their online
          reputation, and increase revenue by providing fast and reliable access to their content
          and services.
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
