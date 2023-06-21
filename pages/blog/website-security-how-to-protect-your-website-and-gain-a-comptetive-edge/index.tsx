import BlogWrapper from 'features/Blog/BlogWrapper';
import Image from 'next/image';
import React from 'react';

const { Matrix } = require('ml-matrix');

import styles from '../Post.module.scss';
import axios from 'axios';
import compareBlogPosts from 'utils/compareBlogs';
import { GetStaticProps, GetStaticPropsContext, NextPageContext } from 'next';

const info = {
  title: 'Website Security: How to Protect Your Website and Gain a Competitive Edge',
  headerImg: '/uploads/1556542894631.jpg',
  date: 'March 14, 2023',
  createdAt: '2023-03-14T12:00:00+0000',
  modifiedAt: '2023-03-14T12:00:00+0000',
  minToRead: 6,
  slug: '/blog/website-security-how-to-protect-your-website-and-gain-a-comptetive-edge',
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
    'Website security is crucial for any business that operates online, regardless of its size or industry. Secure website creates strong connection between the users/audience because trust is one of the main ingredients of successful entity, whether online or offline.',
};

// const nextToReadArr = [
//   {
//     date: 'March 2, 2023',
//     title: 'How To Improve SEO of your Website in 5 Steps',
//     description: `When SEO is set up and used correctly – it could bring lots of new traffic to the web page. It is not complex to accomplish, while optimizing your website could play important part in boosting your search presence. Google receives 90% of all online searches. That’s why we’re going to talk about setting up SEO for Googling and connect to Google Search Console for detailed analysis.`,
//     imgUrl: 'https://trimsy.org/uploads/1666542894623.jpg',
//     slug: '/blog/how-to-improve-seo-of-your-website-in-5-steps',
//   },
//   {
//     date: 'March 9, 2023',
//     title: 'Setting Up Google Analytics Fast and Easy',
//     description: `Tracking website could give a valuable information on how it is used, how well website keeps visitors on different pages, amd even more. The importance of resource about visitors' actions while interacting with a page could play very important part for any future analysis of website's perfomance or improvements of UI/UX features.`,
//     imgUrl: 'https://trimsy.org/uploads/google_analytics_logo.webp',
//     slug: '/blog/setting-up-google-analytics-fast-and-easy',
//   },
//   {
//     date: 'March 12, 2023',
//     title: 'How To Create a Winning Social Media Strategy for Your Website',
//     description: `Creating a winning social media strategy is a crucial component of any successful website marketing plan. It gives confident opportunities for a website grown and expansion.`,
//     imgUrl: 'https://trimsy.org/uploads/1556542894629.jpg',
//     slug: '/blog/how-to-create-a-winning-social-media-strategy',
//   },
// ];

Post.title = info.title;
Post.description = info.description;

// const blogPosts = [
//   {
//     data: {
//       date: 'April 17, 2023',
//       title:
//         'Bridging Borders with Humanity: How Trimsy x Hart Facilitates Humanitarian Aid for Ukrainians',
//       description:
//         'In a world where crises and conflicts often disrupt the lives of vulnerable populations, the power of human compassion can transcend borders, bringing hope and assistance to those in need.',
//       imgUrl: '/uploads/1556542894645.jpg',
//       fullText: `
//       In a world where crises and conflicts often disrupt the lives of vulnerable populations, the power of human compassion can transcend borders, bringing hope and assistance to those in need.

//       Based in Canada, Hart has been working tirelessly to support the humanitarian efforts in Ukraine, where the ongoing conflict has resulted in significant challenges for the affected population. Hart has been instrumental in providing crucial assistance to those displaced by the conflict, including medical supplies, food, and other essentials.

//       With a strong commitment to humanitarian causes, Hart has been partnering with various organizations and non-profits. Their mission is to bridge the gap between the generosity of the Canadian people and the urgent needs of the Ukrainian population.

//       In the midst of a humanitarian crisis Trimsy and Hart has been at the forefront, playing a vital role in facilitating aid for Ukrainians from Canada to Ukraine, helping alleviate suffering and providing much-needed support. One of the unique aspects of humanitarian efforts is its strategic approach of utilizing Poland as a transit point for aid distribution. With a mission to bring humanitarian aid from Canada to Ukraine, Trimsy has been making a positive impact to support to Ukrainian communities.
//       `,
//     },
//     hashtag: ['Social Media', 'Security', 'Trimsy'],
//     slug: '/blog/bridging-borders-with-humanity-how-trimsy-x-hart-facilitates-humanitarian-aid-for-ukranians',
//   },
//   {
//     data: {
//       date: 'April 12, 2023',
//       title: 'Tips for Writing Effective Call-to-Actions (CTAs)',
//       description:
//         'CTAs play a crucial role in the conversion process, as they guide users towards the desired action, helping to drive engagement, generate leads, and ultimately convert users into customers.',
//       imgUrl: 'https://trimsy.org/uploads/1556542894644.jpg',
//       fullText: `
//       CTAs play a crucial role in the conversion process, as they guide users towards the desired action, helping to drive engagement, generate leads, and ultimately convert users into customers.

//       They are often used in conjunction with other marketing strategies, such as landing pages, email campaigns, social media ads, and content marketing, to drive traffic and conversions.

//       Overview
//       Call-to-Actions (CTAs) are prompts or buttons that encourage users to take a specific action, such as signing up for a newsletter, downloading an ebook, making a purchase, or contacting a company.

//       CTAs are an essential component of any marketing or advertising strategy, as they help guide users through the sales funnel and ultimately lead to conversions. It design to be eye-catching and attention-grabbing.

//       Effective CTAs can improve click-through rates, conversion rates, and overall marketing success.

//       1. Use clear and actionable language
//       Your CTA should be straightforward and clearly tell the user what they need to do. Use action-oriented language that creates a sense of urgency.

//       Keep it Short
//       CTAs should be concise and to the point. Avoid lengthy or wordy CTAs that may dilute the impact of the message. Short, punchy CTAs are more memorable and effective in driving action.

//       Use Action-Oriented Language
//       CTAs should use action verbs that prompt users to take immediate action.

//       Words like:

//       "Shop", "Sign Up",
//       "Get", "Download".
//       Will convey a sense of urgency and encourage users to take action.

//       2. The message has to be specific
//       Your CTA should have a specific about what user will get when they click on it.

//       For example, when saying just "Learn more", try to use "Discover 5 Steps to Make Better SEO".

//       3. Create sense of urgency
//       Super important. It gets along with using clear and actionable language.

//       Should be clear and easy for user to take urgent action, phrases like: 'Act Now", "Only Few Spots Left" or "Limited Time Offer" will incoruage users to instantly click.

//       4. Place your CTA strategically
//       The placement of your CTA can have a significant impact on its effectiveness.

//       It should be prominently placed on the page and easy to find as:

//       5. Use contrasting colors
//       Make sure your CTA stands out of the background. It will make user easy to find and click on it.

//       Final Thoughts
//       Call-to-Actions (CTAs) are powerful tools in any marketing or advertising strategy as they guide users towards taking a desired action.

//       Test and Optimize
//       Testing different CTAs will help you find the best one for you. A/B testing can help you determing which language, colors and placement is mostly effective for your audience.
//       `,
//     },
//     hashtag: ['Web', 'Social Media'],
//     slug: '/blog/tips-for-writing-effective-call-to-actions',
//   },
//   {
//     data: {
//       date: 'April 10, 2023',
//       title: 'Unlocking the Power of Progressive Web Apps: Benefits and Features Explained',
//       description:
//         'PWAs are web applications that combine the capabilities of web technologies with the user experience of native mobile applications.Whilst using PWAs capabilities - it will retain users, not difficult to develop and more.',
//       imgUrl: 'https://trimsy.org/uploads/1556542894637.jpg',
//       fullText: `
//       PWAs are web applications that combine the capabilities of web technologies with the user experience of native mobile applications.

//       Whilst using PWAs capabilities - it will retain users, not difficult to develop and more.

//       What is Progressive Web Apps (PWAs)?
//       Progressive Web Apps (PWAs) are web applications that combine native mobile applications' user experience with capabilities of web technologies. Basically, web applications that look and feel like native mobile apps.

//       Any device or platform that uses a standards-complaint web browser, including desktops, smartphones and tablets can be used with PWAs.

//       In Depth
//       They can be installed on the user's device like a native app. Which means they can work offline or with poor internet connection.

//       Allowing users to access content and functionalities even without the stable connection to the network is made possible through the use of Service Workers, which are scripts that run in the background and can intercept network requests, cache content, and respond to user actions even when there is no network connection.

//       Benefits of using PWA:
//       Overall, it offers many benefits for businesses and users alike. While becoming increasingly popular as a way to deliver mobile experiences.

//       Increased Reach
//       PWAs can be accessed from any device with a web browser, allowing businesses to reach a wider audience.

//       Unlike native apps, PWAs don't require users to download and install an app from an app store, which can be a barrier to entry for some users.

//       PWAs can also be shared easily through links or social media, making it easier for businesses to promote their products or services.

//       It's Modern!
//       PWAs use modern web technologies to provide reliable, engaging and fast user experience, such as:

//       Service Workers
//       Web Push Notifications
//       Web App Manifest
//       Web App Manifests are another key component of PWAs. A manifest is a JSON file that provides information about the app, such as its name, icons, and display mode. By including a manifest in the app, developers can ensure that it looks and behaves like a native app when installed on a user's device.

//       SEO Benefits
//       Since PWAs are web applications, they can be indexed by search engines, making it easier for users to find them. This can help businesses increase their visibility and drive more traffic to their website.

//       More about SEO and How To Improve it on Your Website.

//       Cost-effective
//       Developing and maintaining native apps can be expensive, particularly if businesses need to create separate versions for different platforms.

//       PWAs, on the other hand, can be built using web technologies that are widely available and well-understood, reducing development costs.

//       PWAs can also be updated and maintained more easily than native apps, since there's no need to go through the app store approval process.

//       Examples of Progressive Web Apps:
//       1. Uber
//       Uber's PWA offers a streamlined experience for requesting rides and tracking their progress, with features such as real-time updates and location tracking.

//       2. Flipboard

//       Flipboard's PWA offers a fast and engaging experience for browsing news and other content, with features such as offline mode and push notifications.

//       3. Pinterest

//       Pinterest's PWA offers a fast and engaging user experience, with features such as push notifications and an immersive full-screen mode.

//       4. Starbucks

//       Starbucks' PWA allows users to order ahead and pay using their mobile device, as well as providing features such as store locator and menu browsing.

//       Final Thoughts
//       Progressive Web Apps are still a relatively new technology, and there are some limitations to what they can do compared to native apps.

//       For example, they may not have access to all of the hardware features of a device, such as the camera or accelerometer.

//       However, as the technology continues to evolve, it's likely that more and more functionality will be added to PWAs, making them an even more compelling option for developers and businesses alike.
//       `,
//     },
//     hashtag: ['Web', 'Dev'],
//     slug: '/blog/unlocking-the-power-of-progressive-web-apps',
//   },
//   {
//     data: {
//       date: 'April 1, 2023',
//       title: 'Maximizing Website Performance with CDN: Benefits and Advantages',
//       description:
//         'A content delivery network (CDN) is a widely recognized solution that helps to improve website performance. By distributing website content across multiple servers around the globe, a CDN enhances website speed, security, and reliability.',
//       imgUrl: 'https://trimsy.org/uploads/1556542894636_original.png',
//       fullText: `
//       A content delivery network (CDN) is a widely recognized solution that helps to improve website performance.

//       When maintaining a website, it is eassential to keep it safe and fast-loading. To resolve these main two problems, the CDN comes in.

//       The discussion is going to be about Content Delivery Network. What is used for, what is under the hood and more.

//       About CDN
//       A CDN, or Content Delivery Network, is a distributed network of servers that work together to deliver content to users around the world.

//       Servers are typically located in various geographic locations, allowing content to be cached closer to end-users, resulting in faster delivery of content and lower latency.

//       (cloudflare)

//       When a user requests content from a website or application, the CDN will direct the user's request to the closest server that has a cached copy of the content. This reduces the distance the content has to travel and highly improves the overall perfomance of the website application.

//       CDNs are commonly used to deliver large files such as images, videos, and software downloads, as well as static content such as HTML pages and CSS files. They can also help protect websites from DDoS attack by distributing traffic across multiple servers and provdiing additional layers of securiy. More about Securing a website is in other post here.

//       How CDN Improves Perfomance
//       One of the main advantages of using a CDN is improved website speed. By caching and delivering content from the server closest to the user, a CDN reduces latency and decreases page load times, resulting in a faster and more responsive website experience.

//       Content Delivery Network is design to bring only the best by distributing its servers across the globe.

//       While reducing the latency and network congestion that can occur when users access content from a central server located in one physical location improves perfomance of any website.

//       1. Caching
//       CDN makes caching easy by storing website content on multiple servers located in different geographic regions, which can be easily accessed by users. Caching involves temporarily storing frequently accessed website content on the user's device or on the server.

//       By doing so, subsequent requests for the same content can be served faster, improving website speed and user experience.

//       With a CDN, website content is automatically cached on the CDN's servers when it is first accessed. When a user requests the same content again, the CDN's server closest to the user can serve the content from its cache, rather than fetching it from the website's origin server.

//       This reduces the distance the data needs to travel, resulting in faster page load times and a smoother user experience.

//       Moreover, a CDN's caching capabilities can be customized to suit a website's specific needs. For example, website owners can choose how long content should be cached on the CDN's servers before it expires, as well as which types of content should be cached. This can help optimize website performance and improve user experience.

//       Additionally, CDNs can use advanced caching techniques such as dynamic caching and edge caching. Dynamic caching involves caching content that changes frequently, such as social media feeds or real-time data. Edge caching involves caching content on the CDN's servers located at the edge of the network, which are closest to the user. This can reduce latency even further, resulting in faster page load times.

//       2. Reduced latency
//       Reducing latency is one of the main advantages of using a CDN. Latency refers to the time it takes for a user's device to send a request to a website's server and receive a response. When latency is high, it can result in slow page load times and a poor user experience.

//       A CDN can reduce latency by caching website content on multiple servers located in different geographic regions. When a user requests website content, the CDN's server closest to the user can serve the content from its cache, rather than fetching it from the website's origin server. This reduces the distance the data needs to travel, resulting in faster page load times and a smoother user experience.

//       3. Scalability
//       CDNs can handle large volumes of traffic without overloading the oirgin server.

//       By distribuing the load across multiple servers, CDNs can handle sudden spikes in traffic without impacting website perfomance.

//       4. DDoS protection
//       When a website experiences a distributed denial-of-service (DDoS) attack, it means that a large number of requests are sent to the website's server, causing it to overload and potentially crash. This can result in the website being unavailable to users, which can harm a business's reputation and revenue.

//       One way to mitigate the effects of a DDoS attack is by using a CDN. A CDN spreads traffic across multiple servers located in different geographic regions, so when a user requests to access the website, the request is directed to the server closest to the user. This not only reduces latency and improves website speed but also ensures that traffic is spread out across multiple servers.

//       In the event of a DDoS attack, a CDN can detect the surge in traffic and distribute it across multiple servers, which can handle the load and prevent any one server from being overwhelmed. Additionally, a CDN can filter out malicious traffic, blocking any requests that are deemed suspicious or harmful. This can help keep a website online and protect it from cyber attacks.

//       CDNs can help protect website from DDoS attacks by spreading the traffic across multiple servers and filtering out malicious traffic.

//       CDN also enhances website security by mitigating cyber-attacks, particularly distributed denial-of-service (DDoS) attacks that can cripple a website by overloading the servers. A CDN spreads traffic across multiple servers, ensuring that a website can withstand a massive traffic surge and stay online.

//       Conclusion
//       CDN is a powerful tool that can help businesses improve website performance, security, reliability, and save money.

//       By using a CDN, businesses can enhance their users' experience, boost their online reputation, and increase revenue by providing fast and reliable access to their content and services.
//       `,
//     },
//     hashtag: ['Web', 'Dev', 'Security'],
//     slug: '/blog/maximizing-website-performance-with-cdn',
//   },
//   {
//     data: {
//       date: 'March 14, 2023',
//       title: 'Website Security: How to Protect Your Website and Gain a Competitive Edge',
//       description:
//         'Website security is crucial for any business that operates online, regardless of its size or industry. Secure website creates strong connection between the users/audience because trust is one of the main ingredients of successful entity, whether online or offline.',
//       imgUrl: 'https://trimsy.org/uploads/1556542894631.jpg',
//       fullText: `
//       Website security is crucial for any business that operates online, regardless of its size or industry. Secure website creates strong connection between the users/audience because trust is one of the main ingredients of successful entity, whether online or offline. Protecting confidential data
//       Your website may store sensitive information such as customer data, financial information, and business secrets. If that information falls into the wrong hands, it not only going to have effect on the customers, but can have severe consequences for your business as well. Building trust
//       Customers expect your website to be secure when they share their personal information with you. A secure website helps build trust with your customers, which is crucial for customer retention and business growth. Maintaining brand reputation
//       A security breach can have severe consequences for your business reputation. If your website is hacked, it can result in a loss of trust, negative publicity, and even legal actions. Protecting against downtime
//       A website breach can result in downtime, which can be costly for your business Downtime can lead to lost revenue, decreased productivity, and damage to your brand reputation. First few steps to ensure secure website
//       1. Keep your software up-to-date
//       Please, make sure to keep your website software up-to-date with the latest security patches and updates. Including the CMS (Content Management System), plugins, and themes. Hackers and cybercriminals are always looking for ways to exploit vulnerabilities to gain unathorized access to websites and their valuable data. By keeping software up-to-date you can help prevent these vulnerabilities from being exploited and reduce the risk of a security breach. Additionally, outdated software can also cause compatibility issues and impact the perfomance of a website. 2. Using HTTPS and SSL/TLS
//       Securing a website with HTTPS (Hypertext Transfer Protocol Secure) to encrypt data transmission between the server and the client. HTTPS is especially important for websites that handle sensitive user information, such as login credentials, financial data or personal information. Without HTTPS, this data can be intercepted by attackers who can use it for malicious purposes such as identity theft, fraud, or other cybercrimes. Implementing HTTPS also help build trust as discussed earlier. When users see the "Secure" or "HTTPS" label in their browser's address bar, they know that their data is being transmitted securely, which can help to increase their confidence about the website.
//       Secure Socket Layer (SSL) or Transport Layer Security (TLS) encrypts the data transmitted between the website and the users, preventing hackers from intercepting and stealing sensitive information. 3. Using secure hosting and strong passwords
//       Choosing a secure web hosting provider that offers features like DDoS protection, intrusion detection, and server-side scanning for malware might be a good idea. Especially when website has a lot of attention on the internet. Using strong and unique passwords not only for a hosting provider but for all the accounts will ensure indisputable security. Additional Steps
//       4. Limit file uploads
//       Restrict file uploads to only allow certain file types and limit the maximum file size to prevent hackers from uploading malicious files to your server. Limiting file uploads is an essential security measure to protect your website from malware and viruses that can be uploaded by attackers. Allow only specific file types:
//       Limit the types of files that users can upload to your website. For instance, only allow image files, PDFs, or certain document types, and block executable files, scripts, or other dangerous file types. Use file type verification:
//       Implement server-side file type verification to ensure that only allowed file types are uploaded. Attackers may try to bypass client-side restrictions and upload malicious files by changing the file type in the request header. Limit the file size:
//       Restrict the maximum file size that users can upload to your website. Large files can consume a lot of server resources and take longer to scan for viruses or malware. 5. Implement two-factor authentication (2FA)
//       2FA
//       (Shutterstock) Two-factor authentication (2FA) is a security measure that adds an extra layer of protection to the login process. 2FA is effective in preventing unauthorized access to user accounts, even if a hacker has obtained the user's login credentials. This is because the hacker would also need to have access to the second factor, which is typically something that only the legitimate user has, like their phone or email account. Implementing 2FA on your website is a relatively simple process. You can use third-party services that provide 2FA functionality, such as Google Authenticator or Authy, or you can implement your own 2FA system. Some popular CMS platforms, such as WordPress, offer built-in support for 2FA. It's important to note that while 2FA is an effective security measure, it's not foolproof. Hackers have been known to use social engineering tactics to trick users into providing both factors of authentication. Conclusion
//       Website security is essential for your business' success and longevity. Securing a website is an ongoing process that involves several measures to ensure that your website and its data are safe from unauthorized access, hacking attempts, and other security threats. It protects your sensitive and valuable information, builds important trust with customers that can be damaged forever, maintains your brand reputation and protects against downtime.
//       `,
//       hashtag: ['Web', 'Dev', 'Security'],
//     },
//     slug: '/blog/website-security-how-to-protect-your-website-and-gain-a-comptetive-edge',
//   },
//   {
//     data: {
//       date: 'March 12, 2023',
//       title: 'How To Create a Winning Social Media Strategy for Your Website',
//       description:
//         'Creating a winning social media strategy is a crucial component of any successful website marketing plan. It gives confident opportunities for a website grown and expansion.',
//       imgUrl: 'https://trimsy.org/uploads/1556542894629.jpg',
//       fullText: `
//       Creating a winning social media strategy is a crucial component of any successful website marketing plan.

//       It gives confident opportunities for a website grown and expansion.

//       1. Define Your Goals
//       The first step in creating a social media strategy is to define your goals.

//       With clear goals it is much easier to achieve amazing things. Clear Objectives Narrows different paths that could make business go through without need.

//       What do you want to achieve?
//       Website Traffic?
//       Lead Generation?
//       Build brand awareness?
//       Clear goals will help you guide the rest of the social media strategy.

//       2. Identify Targeted Audience
//       Understanding your target audience will help you choose the right social media platforms to focus on and create content that resonates with them .

//       To undetify target audience we should use these questions:
//       Who are my target customers?
//       What social media platforms do they use?
//       These answers are going to help while moving any further of this blog.

//       3. Choose Social Media Platforms
//       Once targeted audience is known, choose the social media platforms that are most relevant to them.

//       For example, if your target audience is primarily professionals, then LinkedIn may be a better choice than Instagram.

//       4. Develop Content Strategy
//       Content Strategy should include the types of content you will create and share, the frequency of posting, and the tone and style of the content.

//       Please, consider the type of content that perfoms well on each platform.

//       5. Create a Posting Schedule
//       Creating a social media posting schedule will insure that your company consistently post content.

//       Consistency is the key in growing solid social media presence.

//       Determine how often your company will post.

//       Important to know what time is the best to make a post for your audience to see.

//       Posting at the wrong time could lead to being in the bottom of all the new posts that other's has made.
//       6. Engage with Your Audience
//       Social media is a two-way conversation.

//       Engage with your audience by responsing to comments, messages and mentions.

//       This helps build relationships and increases brand loyalty.

//       7. Measure and Analyze Your Results
//       Finally, measuring and analyzing social media results regularly will give a taste of what's working and what's not.

//       Using analytics tools to track engagement, traffic, and conversions from social media will help improving your social media strategy.

//       Final thoughts
//       While creating strong goals, defining the presence in social media, measuring and analyzing the progress will result in inevitable progression.

//       Following each step creates a winning social media strategy that drives traffic to your website, builds brand awareness, and engages your target audience.
//       `,
//     },
//     hashtag: ['Web', 'Social Media'],
//     slug: '/blog/how-to-create-a-winning-social-media-strategy',
//   },
//   {
//     data: {
//       date: 'March 9, 2023',
//       title: 'Setting Up Google Analytics Fast and Easy',
//       description:
//         "Tracking website could give a valuable information on how it is used, how well website keeps visitors on different pages, amd even more. The importance of resource about visitors' actions while interacting with a page could play very important part for any future analysis of website's perfomance or improvements of UI/UX features.'",
//       imgUrl: 'https://trimsy.org/uploads/google_analytics_logo.webp',
//       fullText: `
//       Tracking website could give a valuable information on how it is used, how well website keeps visitors on different pages, amd even more.

//       The importance of resource about visitors' actions while interacting with a page could play very important part for any future analysis of website's perfomance or improvements of UI/UX features.

//       Overview
//       Google Analytics, is a web analytics service provided by Google that allows website owners to track and analyze website traffic and user behavior.

//       It provides information such as the number of visitors, pages they visit, how long they stay on each page, their approximate location and also device information.

//       Website owners can use this data to optimize their website, improve user experience, and increase conversions.

//       Notice: While connecting a Google Analytics to a website or mobile app user should be informed that the data of his/her actions is being stored and going to be used in the future. The information includes location of the user, the pages visited and more.
//       Signing Up for Google Analytics
//       First we need to sign up at Google Analytics site.

//       If you have a Google account, you can use it to sign up for Analytics.

//       Ensure to use well secured Google Account to defend the information that is being collected and to keep it safe for the future.

//       Create a new property
//       Once signed up for Google Analytics, we'd need to create a new property.

//       To do this, click on the "Start Measuring". Follow the prompts to enter your website's information with setting up Account Details.

//       Property
//       Property is a website or mobile app that is going to be tracked by a unique tracking ID. Basically it represents the digital entity to analyze data.

//       Each Property can have multiple views, which are different ways to look at the data collected by the tracking ID.

//       Add the tracking code to your website
//       After creating a new property, Google will generate and hand a tracking code.

//       This code needs to be added to every page of your website so that Google Analytics can track your vistors.

//       The code can be added to website's HTML code in the <head> tag.

//       Verify tracking
//       After adding the tracking code to a website, it should be clear that it is working properly.

//       To track a real time users, that are on the website right now proceed to "Reports"

//       Then "Real Time":

//       Maybe there isn't anyone on the website right now, so it might be good idea to open the website in a new tab and browse around, new activity should appear in the Real Time report in Google Analytics.

//       Worth noting that Ad Blockers will suppress any requests to the Google Analytics.

//       That is why some data may be lost. Nevertheless not many people use ad blocker on phones, while around 40% of users are using it on laptops and computers.
//       Bottom Line
//       Setting up Google Analytics for your website can be a powerful tool to track user' behaviour and more for future analysis of website's perfomance, which could play important part in the future.

//       Important piece is to inform your visitors about what data you are collecting and what for, so there would be no legal issues any futher.
//       `,
//     },
//     hashtag: ['Web', 'Dev'],
//     slug: '/blog/setting-up-google-analytics-fast-and-easy',
//   },
//   {
//     data: {
//       date: 'March 2, 2023',
//       title: 'How To Improve SEO of your Website in 5 Steps',
//       description:
//         'When SEO is set up and used correctly – it could bring lots of new traffic to the web page. It is not complex to accomplish, while optimizing your website could play important part in boosting your search presence. Google receives 90% of all online searches. That’s why we’re going to talk about setting up SEO for Googling and connect to Google Search Console for detailed analysis.',
//       imgUrl: 'https://trimsy.org/uploads/1666542894623.jpg',
//       fullText: `
//         One of the ways to publish and distribute your website is to use Search Engine Optimization for Search Engines to show your site to users.

//         Making SEO involves a combination of technical and content optimization.

//         When SEO is set up and used correctly – it could bring lots of new traffic to the web page. It is not complex to accomplish, while optimizing your website could play important part in boosting your search presence.

//         Google receives 90% of all online searches. That’s why we’re going to talk about setting up SEO for Googling and connect to Google Search Console for detailed analysis.

//         Inside of Google’s Search Engine
//         Google uses crawl bots, we are going to talk more about which technologies improve how good your page is for crawlers later on.

//         This picture from Google is going to help us understand the way Google Search Engine works.

//         There is a difference between the Processing stage that parses HTML and Renderer stage which executes Javascript.

//         This was implemented and is a smart move from Google because Javascript is expensive and Googlebots need to look at over hundreds of trillion webpages.

//         So it parses HTML immediately and puts Javascript in queue to run it later.

//         That is a reason, why Google prefer different types of modern technologies more, than old ones.

//         Let's talk more about this.

//         Here are some steps to set up SEO perfectly:
//         1. Content optimization
//         This is important step from the whole Search Engine Optimization perspective.

//         Create high-quality, informative, and engaging content that your target audience is looking for, using your chosen keywords in a natural and strategic way.

//         Researching and selecting the most relevant and valuable keywords for your website would improve the way Search Engines treat your page.

//         Because it helps find relative content to the user, and ease the load on Google Servers to get the right information from the user's input.

//         2. On-page optimization
//         Optimizing your website's title tags, meta descriptions, URLs, image "alt" tags and header tags will make it easy for search engines to understand what your site is about.

//         Search Engine Optimization needs help setting up, so we need to align our code accordingly.

//         In <head> section of our page, we can use <meta> tag to directly tell Google how to understand and treat our page.

//         Description
//         Note that description has to be unique.
//         <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipsing elit. Aliquam ac purus elit. In magna nisi, pulvinar et commodo vitae, elefiend in est. Sed eget diam metus" />
//         Where name tells to put it in description section of Google Search and content is a text of meta tag:

//         Google will crawl your page, and if description of a page is absent or Googlebot finds it very common (could be used in any other webpage, isn’t unique), it is going to ignore the tag and find relative text inside of a page to use and show it instead.

//         This behaviour can be disabled:
//         <meta name="robots" content="noodp,noydir" />
//         These are instructions to search engines not to use information from web directories when showing your site in the search results.

//         Icon
//         Uploading web application icon to this service will help optimizing it for different sizes and types of devices.

//         Additional:
//         Google Search Engine is a smart machine, but many times it confuses what is the website’s main picture is, so we can help Google understand your site better.

//         Setting up a Schema for structured data is going to be a solution.

//         These are now <script> tags and they go to <head> section as well.

//         For example, this would help Google identify which is the desired image for current page, so it could show it next time your page appears in search.
//         If primary image is absent or incorect Google will try to find relavant picture inside the page to show for specific search, regardless - that is why this might be important part.

//         Where primaryImageOfPage is a link to the Logo or Primary .

//         To Show Frequently Asked Question in Google.
//         It might be good thought to tell your FAQ of page directly to Google so it could show it next time with appropriate request from user.

//         3. Technical optimization
//         Ensure that website is technically sound - meaning that it is fast, mobile-friendly, and has a clean and organized code structure.

//         Good to know that Google has a limited resources for each web application – that’s why the app that has too many pages with different content and use lots of javascript – could end up Google reading only a part of the app’s content.
//         Google has a guide for managing your crawl budget here.

//         Using CDN
//         GoogleBots also look at how long it takes to load webpage, so it ranks it up accordingly.

//         Content Delivery Network (CDN) is going to take the workload down, since it’s not the actual code that’s heave to load, but mostly the images and additional libraries that can be loaded from servers that are closer to the user.

//         Unnecessary code
//         Page should not execute any additional code that is not essential for page.

//         At least doing it later, when user is using the app.

//         Loading code asynchronously will speed up the app's loading time. Using KISS and YAGNI principles while developing an app also would help.

//         There is a great tool to info the website speed loading time.
//         4. New Technologies
//         Frameworks like NextJS are one of the best solutions for SEO and GoogleBots to crawl since the content is loaded using the SSR (server-side rendering).

//         This approach enables the server to render the app and send the rendered version to the user already, while other Javascript code loads in the background.

//         Sounds pretty good, right?

//         While search engines will receive HTML directly from the server and doesn’t need generating HTML while crawling.

//         5. Link building
//         Building links to your website from other reputable websites can help boost your site's authority and ranking.

//         This can even be monitored through Google Search Console, in Links tab - List of website's that has linked your page somewhere.

//         More steps:
//         6. Monitor and analyze
//         Tools such as Google Analytics and Google Search Console will give opportunity to monitor your website's perfomance and identify areas for improvement.

//         7. Principles
//         We should use these principles to understand the way Google ranks our page and align our site in favor:

//         It should be quick to load the page (Using CDN)
//         It should not execute any code that’s not essential for page.
//         User should use the site as soon as it is possible.
//         Roughly, it is referred to the following:

//         Time To Interactive (TTI), the time at which a page becomes interactive (user can scroll, click, etc.)
//         Time to First Bite (TTFB), the time to receive the first bite of content after clicking a link
//         Size of Bundle, total bytes of code downloaded and executed before showing a page to user.
//         Largest Contentful Paint (LCP), how long it takes for the Largest Content Element to be visible within visitor’s viewport.
//         Conclusion
//         Google Search is a powerful tool for users to discover requested sources of information, Google found smart ways to rank up different websites and surely most of the time Google needs our help setting up different less or more important things for our site for our own benefit.

//         Remember that SEO is an onging process and requires ongoing effort and optimization to achieve and maintain high rankings in search engines.
//         `,
//     },
//     hashtag: ['Web', 'Dev'],
//     slug: '/blog/how-to-improve-seo-of-your-website-in-5-steps',
//   },
// ];

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
  //   const [nextToReadArr, setNextToReadArr] = React.useState([
  //     {
  //       data: {
  //         date: 'March 2, 2023',
  //         title: 'How To Improve SEO of your Website in 5 Steps',
  //         description:
  //           'When SEO is set up and used correctly – it could bring lots of new traffic to the web page. It is not complex to accomplish, while optimizing your website could play important part in boosting your search presence. Google receives 90% of all online searches. That’s why we’re going to talk about setting up SEO for Googling and connect to Google Search Console for detailed analysis.',
  //         imgUrl: 'https://trimsy.org/uploads/1666542894623.jpg',
  //         hashtags: ['Web', 'Dev'],
  //       },
  //       slug: '/blog/how-to-improve-seo-of-your-website-in-5-steps',
  //     },
  //   ]);

  //   const nextToReadArr = recommendations({ title: info.title, description: info.description });

  //   const query = info.description;
  //   React.useEffect(() => {
  //     // console.log(compareBlogPosts(fullText, blogPosts));
  //     setNextToReadArr(compareBlogPosts(fullText, blogPosts));
  //   }, []);

  //   React.useEffect(() => {
  //     console.log(nextToReadArr);
  //   }, [nextToReadArr]);

  return (
    <BlogWrapper
      info={info}
      summary={currentBlog.data.summary}
      nextToReadArr={currentBlog.data.related}>
      <section className={styles.section}>
        <p>
          Website security is crucial for any business that operates online, regardless of its size
          or industry.
        </p>

        <p>
          Secure website creates strong connection between the users/audience because trust is one
          of the main ingredients of successful entity, whether online or offline.
        </p>

        <h4>Protecting confidential data</h4>
        <p>
          Your website may store sensitive information such as customer data, financial information,
          and business secrets.
        </p>
        <p>
          If that information falls into the wrong hands, it not only going to have effect on the
          customers, but can have severe consequences for your business as well.
        </p>

        <h4>Building trust</h4>
        <p>
          Customers expect your website to be secure when they share their personal information with
          you.
        </p>
        <p>
          A secure website helps build trust with your customers, which is crucial for customer
          retention and business growth.
        </p>

        <h4>Maintaining brand reputation</h4>
        <p>A security breach can have severe consequences for your business reputation.</p>
        <p>
          If your website is hacked, it can result in a loss of trust, negative publicity, and even
          legal actions.
        </p>

        <h4>Protecting against downtime</h4>
        <p>A website breach can result in downtime, which can be costly for your business</p>
        <p>
          Downtime can lead to lost revenue, decreased productivity, and damage to your brand
          reputation.
        </p>

        <h3>First few steps to ensure secure website</h3>

        <h4>1. Keep your software up-to-date</h4>
        <p>
          Please, make sure to keep your website software up-to-date with the latest security
          patches and updates.
        </p>
        <p>Including the CMS (Content Management System), plugins, and themes.</p>
        <p>
          Hackers and cybercriminals are always looking for ways to exploit vulnerabilities to gain
          unathorized access to websites and their valuable data. By keeping software up-to-date you
          can help prevent these vulnerabilities from being exploited and reduce the risk of a
          security breach.
        </p>
        <p>
          Additionally, outdated software can also cause compatibility issues and impact the
          perfomance of a website.
        </p>

        <h4>2. Using HTTPS and SSL/TLS</h4>
        <p>
          Securing a website with HTTPS (Hypertext Transfer Protocol Secure) to encrypt data
          transmission between the server and the client.
        </p>
        <p>
          HTTPS is especially important for websites that handle sensitive user information, such as
          login credentials, financial data or personal information.{' '}
        </p>
        <p>
          Without HTTPS, this data can be intercepted by attackers who can use it for malicious
          purposes such as identity theft, fraud, or other cybercrimes.
        </p>

        <div className={styles.note}>
          <span>{`Implementing HTTPS also help build trust as discussed earlier. When users see the "Secure" or "HTTPS" label in their browser's address bar, they know that their data is being transmitted securely, which can help to increase their confidence about the website.`}</span>
        </div>

        <p>
          Secure Socket Layer (SSL) or Transport Layer Security (TLS) encrypts the data transmitted
          between the website and the users, preventing hackers from intercepting and stealing
          sensitive information.
        </p>

        <h4>3. Using secure hosting and strong passwords</h4>
        <p>
          Choosing a secure web hosting provider that offers features like DDoS protection,
          intrusion detection, and server-side scanning for malware might be a good idea.
        </p>
        <p>Especially when website has a lot of attention on the internet.</p>

        <p>
          Using strong and unique passwords not only for a hosting provider but for all the accounts
          will ensure indisputable security.
        </p>

        <h3>Additional Steps</h3>
        <h4>4. Limit file uploads</h4>
        <p>
          Restrict file uploads to only allow certain file types and limit the maximum file size to
          prevent hackers from uploading malicious files to your server.
        </p>
        <p>
          Limiting file uploads is an essential security measure to protect your website from
          malware and viruses that can be uploaded by attackers.
        </p>

        <h6>Allow only specific file types:</h6>
        <p>
          Limit the types of files that users can upload to your website. For instance, only allow
          image files, PDFs, or certain document types, and block executable files, scripts, or
          other dangerous file types.
        </p>
        <h6>Use file type verification:</h6>
        <p>
          Implement server-side file type verification to ensure that only allowed file types are
          uploaded.
        </p>
        <p>
          Attackers may try to bypass client-side restrictions and upload malicious files by
          changing the file type in the request header.
        </p>
        <h6>Limit the file size:</h6>
        <p>Restrict the maximum file size that users can upload to your website.</p>
        <p>
          Large files can consume a lot of server resources and take longer to scan for viruses or
          malware.
        </p>

        <h4>5. Implement two-factor authentication (2FA)</h4>
        {/* <Image fill src={'https://trimsy.org/uploads/1666542894624.jpg'} alt="2FA Image" /> */}
        <div className={styles.img}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '70%', height: 'auto' }}
            src={'/uploads/1666542894624.png'}
            alt="2FA Image"
            loading={'lazy'}
            quality={'100'}
          />
        </div>
        <p className={styles.underline_text}>(Shutterstock)</p>

        <p>
          Two-factor authentication (2FA) is a security measure that adds an extra layer of
          protection to the login process.
        </p>
        <p>
          2FA is effective in preventing unauthorized access to user accounts, even if a hacker has
          obtained the user's login credentials. This is because the hacker would also need to have
          access to the second factor, which is typically something that only the legitimate user
          has, like their phone or email account.
        </p>
        <p>
          Implementing 2FA on your website is a relatively simple process. You can use third-party
          services that provide 2FA functionality, such as Google Authenticator or Authy, or you can
          implement your own 2FA system. Some popular CMS platforms, such as WordPress, offer
          built-in support for 2FA.
        </p>
        <p>
          It's important to note that while 2FA is an effective security measure, it's not
          foolproof. Hackers have been known to use social engineering tactics to trick users into
          providing both factors of authentication.
        </p>

        <h3>Conclusion</h3>
        <p>{`Website security is essential for your business' success and longevity. `}</p>
        <p>
          Securing a website is an ongoing process that involves several measures to ensure that
          your website and its data are safe from unauthorized access, hacking attempts, and other
          security threats.
        </p>
        <p>
          It protects your sensitive and valuable information, builds important trust with customers
          that can be damaged forever, maintains your brand reputation and protects against
          downtime.
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
