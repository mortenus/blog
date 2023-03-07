import { ImageUnoptimized } from 'components';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './Post.module.scss';

const info = {
  title: 'How To Improve SEO of your Website in 5 Steps',
  headerImg: 'https://trimsy.org/uploads/1666542894623.jpg',
  date: 'March 2, 2023',
  createdAt: '2023-03-02T12:00:00+0000',
  modifiedAt: '2023-03-04T12:00:00+0000',
  minToRead: 8,
  slug: '/blog/how-to-improve-seo-of-your-website-in-5-steps',
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
  },
  description:
    'When SEO is set up and used correctly – it could bring lots of new traffic to the web page. It is not complex to accomplish, while optimizing your website could play important part in boosting your search presence. Google receives 90% of all online searches. That’s why we’re going to talk about setting up SEO for Googling and connect to Google Search Console for detailed analysis.',
};

const ArticleSchema = {
  '@context': 'https://schema.org',
  '@id': `https://trimsy.org${info.slug}#article`,
  '@type': 'NewsArticle',
  headline: info.title,
  image: [info.headerImg],
  datePublished: info.createdAt,
  dateModified: info.modifiedAt,
  author: { '@type': 'Person', name: info.author.fullname },
  speakable: {
    '@type': 'SpeakableSpecification',
    xPath: ['//title', "/html/head/meta[@name='description']/@content"],
  },
  publisher: {
    '@type': 'Organization',
    name: 'Trimsy',
    url: 'https://trimsy.org',
    logo: {
      '@type': 'ImageObject',
      url: 'https://trimsy.org/images/logo.svg',
      width: 112,
      height: 112,
    },
    sameAs: ['https://www.linkedin.com/company/trimsy'],
  },
};

Post.title = info.title;
Post.description = info.description;

export default function Post() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Link href="/blog#search" className={styles.return}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              viewBox="6 6 12 12"
              style={{ rotate: '90deg' }}>
              <path d="M7 9.79a.5.5 0 0 1 .854-.353L12 13.584l4.146-4.147a.5.5 0 1 1 .708.708L12 14.998l-4.854-4.853A.5.5 0 0 1 7 9.79Z"></path>
            </svg>{' '}
            <span>Return</span>
          </Link>
          <h2 className={styles.title}>{info.title}</h2>
          <div className={styles.headerImg}>
            {/* <Image
              priority
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto', maxHeight: '600px', objectFit: 'cover' }}
              src={info.headerImg}
              alt={'Header IMG'}
            /> */}
            <ImageUnoptimized
              src={info.headerImg}
              width="0"
              height="0"
              sizes="100vw"
              priority
              style={{ width: '100%', height: 'auto', maxHeight: '600px', objectFit: 'cover' }}
              alt={'Header Blog Image'}
            />
          </div>

          <div className={styles.date}>
            <span>{info.date}</span>
            <div className={styles.line} />
            <span>{info.minToRead} mins read</span>
          </div>

          <section>
            <p>
              One of the ways to publish and distribute your website is to use Search Engine
              Optimization for Search Engines to show your site to users.
            </p>

            <p>Making SEO involves a combination of technical and content optimization.</p>

            <p>
              When SEO is set up and used correctly – it could bring lots of new traffic to the web
              page. It is not complex to accomplish, while optimizing your website could play
              important part in boosting your search presence.
            </p>

            <p>
              Google receives 90% of all online searches. That’s why we’re going to talk about
              setting up SEO for Googling and connect to Google Search Console for detailed
              analysis.
            </p>

            <h3>Inside of Google’s Search Engine</h3>
            <p>
              Google uses crawl bots, we are going to talk more about which technologies improve how
              good your page is for crawlers later on.
            </p>
            <p>
              This picture from Google is going to help us understand the way Google Search Engine
              works.
            </p>
            <Image
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              src={'https://trimsy.org/uploads/8459359022794.png'}
              alt={'Image'}
            />
            <p>
              There is a difference between the Processing stage that parses HTML and Renderer stage
              which executes Javascript.
            </p>
            <p>
              This was implemented and is a smart move from Google because Javascript is expensive
              and Googlebots need to look at over{' '}
              <Link
                href="https://www.kevin-indig.com/googles-index-is-smaller-than-we-think-and-might-not-grow-at-all/"
                target={'_blank'}>
                hundreds of trillion webpages.
              </Link>
            </p>
            <p>So it parses HTML immediately and puts Javascript in queue to run it later.</p>

            <p>
              That is a reason, why Google prefer different types of modern technologies more, than
              old ones.
            </p>

            <p>Let&apos;s talk more about this.</p>

            <h3>Here are some steps to set up SEO perfectly:</h3>

            <h4>1. Content optimization</h4>
            <p>This is important step from the whole Search Engine Optimization perspective.</p>
            <p>
              Create high-quality, informative, and engaging content that your target audience is
              looking for, using your chosen keywords in a natural and strategic way.
            </p>
            <p>
              Researching and selecting the most relevant and valuable keywords for your website
              would improve the way Search Engines treat your page.
            </p>
            <p>
              Because it helps find relative content to the user, and ease the load on Google
              Servers to get the right information from the user&apos;s input.
            </p>

            <h4>2. On-page optimization</h4>
            <p>{`Optimizing your website's title tags, meta descriptions, URLs, image "alt" tags and header tags will make it easy for search engines to understand what your site is about.`}</p>

            <p>
              Search Engine Optimization needs help setting up, so we need to align our code
              accordingly.
            </p>
            <p>
              {
                'In <head> section of our page, we can use <meta> tag to directly tell Google how to understand and treat our page.'
              }
            </p>

            <h5>Title</h5>
            <div className={styles.code}>
              <code>
                {`         <title>{"Lorem ipsum dolor sit amet"}</title>
`}
              </code>
            </div>
            <p>
              {`<title> isn’t exactly a meta tag, but is used by Search Engines and is important
              part:`}
            </p>
            <Image
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              src={'https://trimsy.org/uploads/8131405422084.png'}
              alt={'Image'}
            />

            <h5>Description</h5>

            <div className={styles.note}>
              <span>Note that description has to be unique.</span>
            </div>

            <div className={styles.code}>
              <code>
                {`        <meta
name="description"
content="Lorem ipsum dolor sit amet, consectetur adipsing elit. Aliquam ac purus elit. In magna nisi, pulvinar et commodo vitae, elefiend in est. Sed eget diam metus"
/>
`}
              </code>
            </div>

            <p>
              Where <span>name</span> tells to put it in description section of Google Search and{' '}
              <span>content</span> is a text of meta tag:
            </p>

            {/* <div className={styles.img}> */}
            <Image
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              src={'https://trimsy.org/uploads/5735159490278.png'}
              alt={'Image'}
            />

            {/* </div> */}

            <p>
              Google will crawl your page, and if description of a page is absent or Googlebot finds
              it very common (could be used in any other webpage, isn’t unique), it is going to
              ignore the tag and find relative text inside of a page to use and show it instead.
            </p>

            <h6>This behaviour can be disabled:</h6>

            <div className={styles.code}>
              <code>
                {`        <meta name="robots" content="noodp,noydir" />
`}
              </code>
            </div>
            <p>
              These are instructions to search engines not to use information from web directories
              when showing your site in the search results.
            </p>

            <h5>Icon</h5>

            <p>
              Uploading web application icon to{' '}
              <Link href="https://realfavicongenerator.net/" target={'_blank'}>
                this
              </Link>{' '}
              service will help optimizing it for different sizes and types of devices.
            </p>

            <div className={styles.code}>
              <code>
                {`         <link rel="icon" href="/favicon.ico" />
`}
              </code>
            </div>

            <Image
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '75%', height: 'auto' }}
              src={'https://trimsy.org/uploads/5454256022794.png'}
              alt={'Image'}
            />

            <h6>Additional:</h6>

            <p>
              Google Search Engine is a smart machine, but many times it confuses what is the
              website’s main picture is, so we can help Google understand your site better.
            </p>

            <p>Setting up a Schema for structured data is going to be a solution.</p>
            <p>{`These are now <script> tags and they go to <head> section as well.`}</p>
            <h5>
              For example, this would help Google identify which is the desired image for current
              page, so it could show it next time your page appears in search.
            </h5>
            <div className={styles.note}>
              <span>
                If primary image is absent or incorect Google will try to find relavant picture
                inside the page to show for specific search, regardless - that is why this might be
                important part.
              </span>
            </div>
            <div className={styles.code}>
              <code>
                {`<script type="application/ld+json">`}
                <br />
                {`{`}
                <br />
                {`'@context': 'http://schema.org',`}
                <br />
                &nbsp;&nbsp;&nbsp;
                {`'@type': 'WebPage',`}
                <br />
                &nbsp;&nbsp;&nbsp;
                {`'@id': 'https://example.com/#webpage',`}
                <br />
                &nbsp;&nbsp;&nbsp;
                {`url: 'https://example.com/',`}
                <br />
                &nbsp;&nbsp;&nbsp;
                {`name: 'Example',`}
                <br />
                &nbsp;&nbsp;&nbsp;
                {`primaryImageOfPage: { '@id': 'https://img.example.com/logo.svg' },`}
                <br />
                {`}`}
                <br />
                {`</script>`}
              </code>
            </div>

            {/* <div className={styles.code}>
              <code>
                {`        {
      '@type': 'ImageObject',
      '@id': 'https://trimsy.org/#primaryimage',
      inLanguage: 'en-US',
      url: 'https://trimsy.org/images/mini-logo.png',
      contentUrl: 'https://trimsy.org/images/mini-logo.png',
      width: 500,
      height: 500
    }
`}
              </code>
            </div> */}
            <p>
              Where <span>primaryImageOfPage</span> is a link to the{' '}
              <span>Logo or Primary Image.</span>
            </p>

            <h5>To Show Frequently Asked Question in Google.</h5>
            <p>
              {' '}
              It might be good thought to tell your FAQ of page directly to Google so it could show
              it next time with appropriate request from user.
            </p>
            <div className={styles.note}>
              <span>Note that there has to be at least three FAQ items.</span>
            </div>
            <div className={styles.code}>
              <code>
                {`<script type="application/ld+json">`}
                <br />
                {`{`}
                <br />
                &nbsp;&nbsp;&nbsp;
                {`'@context': 'https://schema.org',`}
                <br />
                &nbsp;&nbsp;&nbsp;
                {`'@type': 'FAQPage',`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                {`mainEntity: [`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`{`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`'@type': 'Question',`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`name: 'What?',`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`acceptedAnswer: {`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`'@type': 'Answer',`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`text: 'Nothing!',`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`},`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`{`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`'@type': 'Question',`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`name: 'What?',`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`acceptedAnswer: {`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`'@type': 'Answer',`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`text: 'Nothing!',`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`},`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`{`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`'@type': 'Question',`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`name: 'What?',`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`acceptedAnswer: {`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`'@type': 'Answer',`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`text: 'Nothing!',`}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`},`}
                <br />
                &nbsp;&nbsp;&nbsp;
                {`],`}
                <br />
                {`};`}
                <br />
                {`</script>`}
              </code>
            </div>

            <h4>3. Technical optimization</h4>
            <p>
              Ensure that website is technically sound - meaning that it is fast, mobile-friendly,
              and has a clean and organized code structure.
            </p>

            <div className={styles.note}>
              <span>
                Good to know that Google has a limited resources for each web application – that’s
                why the app that has too many pages with different content and use lots of
                javascript – could end up Google reading only a part of the app’s content.
              </span>
            </div>

            <p>
              Google has a guide for managing your crawl budget{' '}
              <Link
                href="https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget"
                target={'_blank'}>
                here.
              </Link>
            </p>

            <h5>Using CDN</h5>
            <p>
              GoogleBots also look at how long it takes to load webpage, so it ranks it up
              accordingly.
            </p>
            <p>
              Content Delivery Network (CDN) is going to take the workload down, since it’s not the
              actual code that’s heave to load, but mostly the images and additional libraries that
              can be loaded from servers that are closer to the user.
            </p>

            <h5>Unnecessary code</h5>
            <p>Page should not execute any additional code that is not essential for page.</p>
            <p>At least doing it later, when user is using the app.</p>
            <p>
              Loading code asynchronously will speed up the app&apos;s loading time. Using KISS and
              YAGNI principles while developing an app also would help.
            </p>
            <div className={styles.note}>
              <span>
                There is a great{' '}
                <Link href="https://gtmetrix.com/" target={'_blank'}>
                  tool
                </Link>{' '}
                to info the website speed loading time.
              </span>
            </div>

            <h4>4. New Technologies</h4>
            <p>
              Frameworks like NextJS are one of the best solutions for SEO and GoogleBots to crawl
              since the content is loaded using the SSR (server-side rendering).
            </p>
            <p>
              This approach enables the server to render the app and send the rendered version to
              the user already, while other Javascript code loads in the background.
            </p>
            <p>Sounds pretty good, right?</p>
            <p>
              While search engines will receive HTML directly from the server and doesn’t need
              generating HTML while crawling.
            </p>

            <h4>5. Link building</h4>
            <p>
              Building links to your website from other reputable websites can help boost your
              site&apos;s authority and ranking.
            </p>

            <p>
              This can even be monitored through Google Search Console, in Links tab - List of
              website&apos;s that has linked your page somewhere.
            </p>

            <h4>More steps:</h4>
            <h4>6. Monitor and analyze</h4>
            <p>
              Tools such as Google Analytics and Google Search Console will give opportunity to
              monitor your website&apos;s perfomance and identify areas for improvement.
            </p>

            <h3>7. Principles</h3>
            <p>
              We should use these principles to understand the way Google ranks our page and align
              our site in favor:
            </p>
            <ul>
              <li>It should be quick to load the page (Using CDN)</li>
              <li>It should not execute any code that’s not essential for page.</li>
              <li>User should use the site as soon as it is possible.</li>
            </ul>
            <p>Roughly, it is referred to the following:</p>
            <ul>
              <li>
                Time To Interactive (TTI), the time at which a page becomes interactive (user can
                scroll, click, etc.)
              </li>
              <li>
                Time to First Bite (TTFB), the time to receive the first bite of content after
                clicking a link
              </li>
              <li>
                Size of Bundle, total bytes of code downloaded and executed before showing a page to
                user.
              </li>
              <li>
                Largest Contentful Paint (LCP), how long it takes for the Largest Content Element to
                be visible within visitor’s viewport.
              </li>
            </ul>

            <h3>Conclusion</h3>
            <p>
              Google Search is a powerful tool for users to discover requested sources of
              information, Google found smart ways to rank up different websites and surely most of
              the time Google needs our help setting up different less or more important things for
              our site for our own benefit.
            </p>
            <p>
              Remember that SEO is an onging process and requires ongoing effort and optimization to
              achieve and maintain high rankings in search engines.
            </p>
          </section>

          <div className={styles.author}>
            <div className={styles.img}>
              <Image fill src={info.author.avatarUrl} alt={'Author image'} />
            </div>
            <div className={styles.info}>
              <span>Written by</span>
              <h4 className={styles.name}>{info.author.fullname}</h4>
              <span className={styles.position}>{info.author.position}</span>
              <p className={styles.description}>{info.author.description}</p>
            </div>
          </div>

          {/* <div className={styles.further}>
          <h3>Next to Read</h3>

          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.img}>
                <Image fill src={'/static/img/blog/info/1.jpg'} alt={'Next to Read IMG'} />
              </div>
              <div className={styles.content}>
                <span className={styles.nextDate}>Apr 26, 2022</span>
                <h4>How to get more client to get to your business</h4>
                <p>
                  I&apos;m a CEO and a Co-Founder of Whimsy Games. Before that, I advanced my
                  expertise in engineering, management, traffic marketing, and analytics working for
                  large game development studios with a $1M+ monthly income. With a clear vision of
                  how game development should work, I run Whimsy Games, being responsible for the
                  marketing and sales of our products and services.
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.img}>
                <Image fill src={'/static/img/blog/info/2.jpg'} alt={'Next to Read IMG'} />
              </div>
              <div className={styles.content}>
                <span className={styles.nextDate}>Apr 26, 2022</span>
                <h4>How to get more client to get to your business</h4>
                <p>
                  I&apos;m a CEO and a Co-Founder of Trimsy. I deeply appreciate the encouragment
                  and mutual benefit from the associates I am given a chance to have a journey with.
                  Before that, I advanced my expertise in engineering, management, traffic
                  marketing, and analytics working for large game development studios with a $1M+
                  monthly income. With a clear vision of how game development should work, I run
                  Whimsy Games, being responsible for the marketing and sales of our products and
                  services.
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.img}>
                <Image fill src={'/static/img/blog/info/3.jpg'} alt={'Next to Read IMG'} />
              </div>
              <div className={styles.content}>
                <span className={styles.nextDate}>Apr 26, 2022</span>
                <h4>How to get more client to get to your business</h4>
                <p>
                  I&apos;m a CEO and a Co-Founder of Whimsy Games. Before that, I advanced my
                  expertise in engineering, management, traffic marketing, and analytics working for
                  large game development studios with a $1M+ monthly income. With a clear vision of
                  how game development should work, I run Whimsy Games, being responsible for the
                  marketing and sales of our products and services.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        </div>
      </div>
      <Head>
        <script
          type="application/ld+json"
          async
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ArticleSchema) }}
        />
      </Head>
    </>
  );
}
