import React from 'react';

import styles from './blog.module.scss';

import { BlogItem } from 'features/Blog';
import Modal from 'features/Modal';
import useHideOnOutsideClick from 'hooks/useHideOnOutsideClick';
import { axios } from 'core';

// import { useFetchBlogs } from 'features/Blog/hooks';
// import useAnimateBackgroundPosition from 'hooks/useAnimateEaseInOut';
// import axios from 'axios';

Blog.title = 'Blog';
Blog.description = 'Trimsy Blog - Read new releases, get updates and latest news.';

const info = {
  title:
    'Bridging Borders with Humanity: How Trimsy x Hart Facilitates Humanitarian Aid for Ukrainians',
  headerImg: '/uploads/1556542894647.jpg',
  date: 'April 17, 2023',
  createdAt: '2023-04-12T12:00:00+0000',
  modifiedAt: '2023-04-12T12:00:00+0000',
  minToRead: 2,
  slug: '/blog/briding-borders-with-humanity-how-trimsy-x-hart-facilitates-humanitarian-aid-for-ukranians',
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

export default function Blog({ items }: any) {
  //   const { items, totalPages, currentPage, setPageNumber, incrementPage, decrementPage } =
  //     useFetchBlogs();

  const layouts = [
    {
      count: 1,
      classes: [1],
    },
    {
      count: 2,
      classes: [1, 1],
    },
    {
      count: 3,
      classes: [1, 6, 7],
    },
    {
      count: 4,
      classes: [1, 6, 7, 1],
    },
    {
      count: 5,
      classes: [1, 6, 7, 6, 7],
    },
    {
      count: 6,
      classes: [1, 6, 7, 6, 7, 1],
    },
    {
      count: 7,
      classes: [1, 6, 7, 6, 7, 6, 7],
    },
    {
      count: 8,
      classes: [1, 6, 7, 6, 7, 6, 7, 1],
    },
    {
      count: 9,
      classes: [1, 6, 7, 6, 7, 6, 7, 6, 7],
    },
  ];

  const layout =
    items && items.length > 0 && layouts.find((layout) => layout.count === items.length);

  //   const currentValue = useAnimateBackgroundPosition(0, -440, 1750, 600);

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const ref = React.useRef(null);
  const toNotCloseRef = React.useRef(null);

  useHideOnOutsideClick(
    isModalVisible,
    () => setIsModalVisible(!isModalVisible),
    ref,
    toNotCloseRef,
  );

  const [favorites, setFavorites] = React.useState<undefined | string[]>(undefined);

  const getUserDataFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');

      if (user) {
        const parsedUser = JSON.parse(user);

        const favoriteBlogs = parsedUser.favoriteBlogs;
        if (!favoriteBlogs) return;
        setFavorites(favoriteBlogs);
      }
    }
  };

  React.useEffect(() => {
    getUserDataFromLocalStorage();
  }, []);

  const handleFavoriteSend = async (slug: string) => {
    return axios
      .post('http://localhost:3001/user/blog/favorites', { slug })
      .then(async () => {
        return axios
          .get('http://localhost:3001/user/me')
          .then(({ data }) => {
            localStorage.setItem('user', JSON.stringify(data));
            localStorage.setItem('isAuth', String(true));

            getUserDataFromLocalStorage();
            //   window.localStorage['data'] = data;
            //   window.localStorage['isAuth'] = true;

            return true;
          })
          .catch((err) => {
            if (err.response && err.response.status === 403) {
              delete window.localStorage.token;
              delete window.localStorage.data;
            }
          });
      })
      .catch((err) => {
        console.log('There has been an error while updating the favorites blogs', err);
        return false;
      });
  };

  return (
    <>
      <div className={styles.wrapper}>
        <h1>Trimsy Blog</h1>

        {/* <LocalNav /> */}

        {/* <div className={styles.intro}>
          <div className={styles.logo}>
            <div className={styles.img}>
              <Image
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '70%', height: 'auto' }}
                src={Logo}
                alt="HR image"
                loading={'lazy'}
                quality={'100'}
              />
            </div>
            <h2 style={{ backgroundPosition: currentValue && `${currentValue}px 50%` }}>Blog</h2>
          </div>
          {/* <p>Get the latest news about Web, SEO and Design in our Blog.</p> */}
        {/* <p>
            From the latest industry news to in-depth guides and tutorials, our blog has everything
            you need to succeed online and stay ahead of the curve.
          </p> */}
        {/* <div className={styles.background}>
            <ImageUnoptimized
              src={'/static/img/blog/blog-background.jpg'}
              fill
              priority
              alt={'Intro Image'}
            />
          </div> */}
        {/* </div> */}
        <div className={styles.content}>
          {/* <div className={'global-wrapper--small'}>
            <div className={styles.search}>
              <svg
                className={styles.icon}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.1527 15.0943H16.0686L15.6844 14.7238C17.0756 13.1102 17.8403 11.05 17.8388 8.91938C17.8388 7.1553 17.3157 5.43083 16.3356 3.96404C15.3555 2.49726 13.9625 1.35404 12.3327 0.678951C10.7029 0.00386463 8.90949 -0.172769 7.1793 0.171387C5.44911 0.515544 3.85983 1.36503 2.61243 2.61243C1.36503 3.85983 0.515544 5.44911 0.171387 7.1793C-0.172769 8.90949 0.00386463 10.7029 0.678951 12.3327C1.35404 13.9625 2.49726 15.3555 3.96404 16.3356C5.43083 17.3157 7.1553 17.8388 8.91938 17.8388C11.1286 17.8388 13.1595 17.0292 14.7238 15.6844L15.0943 16.0686V17.1527L21.9554 24L24 21.9554L17.1527 15.0943ZM8.91938 15.0943C5.50258 15.0943 2.74443 12.3362 2.74443 8.91938C2.74443 5.50258 5.50258 2.74443 8.91938 2.74443C12.3362 2.74443 15.0943 5.50258 15.0943 8.91938C15.0943 12.3362 12.3362 15.0943 8.91938 15.0943Z"
                  fill="black"
                />
              </svg>
              <input type="text" placeholder={'Search Article'} />

              <Button
                style={{
                  height: '50px',
                  position: 'absolute',
                  right: '0',
                }}
                color={'white'}
                size="small"
                type={'search'}
                onClick={() => {}}>
                Search
              </Button>
            </div>
          </div> */}

          <div className={'global-wrapper--small'}>
            <h2 className={styles.headline}>Latest</h2>
            <div className={styles[`grid-items`]}>
              {items &&
                items.length > 0 &&
                (() => {
                  const components = [];
                  for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    const itemCount: number = layout!.classes[i];

                    // Check if itemCount for current and next items is equal to 2
                    const isFlex =
                      itemCount !== 1 && i + 1 < items.length && layout!.classes[i + 1] !== 1;

                    // Add a flex parent for the two consecutive items with itemCount === 2
                    const itemComponent = (
                      <BlogItem
                        key={item.slug}
                        itemCount={itemCount}
                        slug={item.slug && item.slug}
                        onClick={!item.slug ? () => setIsModalVisible(true) : undefined}
                        customRef={!item.slug && toNotCloseRef}
                        featured={i === 0}
                        type={item.type && item.type}
                        isFavorited={
                          favorites
                            ? favorites.some((favoritedSlug) => favoritedSlug === item.slug)
                            : null
                        }
                        handleFavoriteSend={handleFavoriteSend}
                        {...item.data}
                      />
                    );

                    if (isFlex) {
                      components.push(
                        <div key={`${item.slug}-flex`} className={styles.flex}>
                          {itemComponent}
                          <BlogItem
                            key={items[i + 1].slug}
                            itemCount={layout!.classes[i + 1]}
                            slug={items[i + 1].slug}
                            isFavorited={
                              favorites
                                ? favorites.some(
                                    (favoritedSlug) => favoritedSlug === items[i + 1].slug,
                                  )
                                : null
                            }
                            handleFavoriteSend={handleFavoriteSend}
                            {...items[i + 1].data}
                          />
                        </div>,
                      );
                      i++; // Skip the next item if it's already rendered inside the `isFlex` block
                    } else {
                      components.push(itemComponent);
                    }
                  }
                  return components;
                })()}
              {/* <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index} className={gridClasses[items.length][index] + ' ' + styles.item}>
        <BlogItem key={item.slug} slug={item.slug} {...item.data} /
        </div>
      ))}
    </div> */}
            </div>
          </div>
          {/* {totalPages > 1 && (
            <div className={styles.nav}>
              <BlogButton type={'nav'} onClick={decrementPage}>
                Prev
              </BlogButton>

              <div className={styles.numbers}>
                {Array.from(Array(totalPages).keys()).map((num: number) => (
                  <BlogButton
                    active={num + 1 === currentPage}
                    key={num + 1}
                    type={'number'}
                    onClick={() => setPageNumber(num + 1)}>
                    {num + 1}
                  </BlogButton>
                ))}
              </div>
              <BlogButton type={'nav'} onClick={incrementPage}>
                Next
              </BlogButton>
            </div>
          )} */}
        </div>
      </div>
      <Modal
        info={info}
        opened={isModalVisible}
        setIsOpened={() => setIsModalVisible(!isModalVisible)}
        customRef={ref}>
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
      </Modal>
    </>
  );
}

export async function getStaticProps() {
  //   const res = await axios.get(`https://secure.trimsy.org/blogs?page=${1}`);

  //   const items = res.data.items;

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
      type: 'QUICK READ',
    },
    {
      data: {
        date: 'April 12, 2023',
        title: 'Tips for Writing Effective Call-to-Actions (CTAs)',
        description:
          'CTAs play a crucial role in the conversion process, as they guide users towards the desired action, helping to drive engagement, generate leads, and ultimately convert users into customers.',
        imgUrl: 'https://trimsy.org/uploads/1556542894644.jpg',
      },
      slug: '/blog/tips-for-writing-effective-call-to-actions',
    },
    {
      data: {
        date: 'April 10, 2023',
        title: 'Unlocking the Power of Progressive Web Apps: Benefits and Features Explained',
        description:
          'PWAs are web applications that combine the capabilities of web technologies with the user experience of native mobile applications.Whilst using PWAs capabilities - it will retain users, not difficult to develop and more.',
        imgUrl: 'https://trimsy.org/uploads/1556542894637.jpg',
      },
      slug: '/blog/unlocking-the-power-of-progressive-web-apps',
    },
    {
      data: {
        date: 'April 1, 2023',
        title: 'Maximizing Website Performance with CDN: Benefits and Advantages',
        description:
          'A content delivery network (CDN) is a widely recognized solution that helps to improve website performance. By distributing website content across multiple servers around the globe, a CDN enhances website speed, security, and reliability.',
        imgUrl: 'https://trimsy.org/uploads/1556542894636_original.png',
      },
      slug: '/blog/maximizing-website-performance-with-cdn',
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
    props: {
      items,
    },
  };
}
