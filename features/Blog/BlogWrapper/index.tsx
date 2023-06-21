import { Button, ImageUnoptimized } from 'components';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import NextToRead from '../NextToRead';

import TBlogWrapper from './BlogWrapper.types';

import styles from './BlogWrapper.module.scss';
import Link from 'next/link';
// import useAnimateBackgroundPosition from 'hooks/useAnimateEaseInOut';
// import useOnScreen from 'hooks/useOnScreen';
// import { useIsVisible } from 'hooks/useIsVisible';
import useInView from 'hooks/useInView';
import { useOnScroll } from 'hooks/useOnScroll';

const BlogWrapper = ({ children, info, nextToReadArr, summary }: TBlogWrapper) => {
  const ArticleSchema = {
    '@context': 'https://schema.org',
    '@id': `https://trimsy.org${info.slug}#article`,
    '@type': 'NewsArticle',
    headline: info.title,
    image: [info.headerImg],
    datePublished: info.createdAt,
    dateModified: info.modifiedAt,
    author: { '@type': 'Person', name: info.author.fullname, url: info.author.profileUrl },
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

  const WebSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': 'https://trimsy.org/#breadcrumb',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Blog', item: 'https://trimsy.org/blog' },
      {
        '@type': 'ListItem',
        position: 2,
        name: info.title,
        item: `https://trimsy.org${info.slug}`,
      },
    ],
  };

  const blogHeadlineRef = React.useRef(null);

  const { onScrollEvent } = useOnScroll();

  const { inView: isHeadlineVisible } = useInView({
    ref: blogHeadlineRef,
    onScrollEvent,
    oneTime: true,
  });

  const useAnimateBackgroundPosition = (
    isVisible: boolean,
    startValue: number,
    endValue: number,
    duration: number,
    delay: number,
  ) => {
    const changeInValue = endValue - startValue;
    const [currentValue, setCurrentValue] = React.useState<number>(startValue);
    const animationRef = React.useRef<number | null>(null);

    const easeInOut = (
      currentTime: number,
      startValue: number,
      changeInValue: number,
      duration: number,
    ) => {
      currentTime /= duration / 2;
      if (currentTime < 1) {
        return (changeInValue / 2) * currentTime * currentTime + startValue;
      }
      currentTime--;
      return (-changeInValue / 2) * (currentTime * (currentTime - 2) - 1) + startValue;
    };

    React.useEffect(() => {
      let startTime: number | null = null;

      const animateBackgroundPosition = (timestamp: number) => {
        if (!startTime) {
          startTime = timestamp;
        }

        const elapsed = timestamp - startTime;

        if (elapsed > delay) {
          const newValue = easeInOut(elapsed - delay, startValue, changeInValue, duration);
          setCurrentValue(newValue);
        }

        if (elapsed < duration + delay) {
          animationRef.current = requestAnimationFrame(animateBackgroundPosition);
        }
      };

      if (isVisible) {
        animationRef.current = requestAnimationFrame(animateBackgroundPosition);
      }

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }, [isVisible]); // Use isVisible as a dependency to trigger effect when it changes

    return currentValue;
  };

  //   let currentValue = 0;
  //   const conditionalCall = (condition: boolean) => {
  //     React.useEffect(() => {
  //       if (condition) {
  //         currentValue = useAnimateBackgroundPosition(0, -440, 1750, 600);
  //       } else {
  //         return;
  //       }
  //     }, [condition]);
  //   };

  //   React.useEffect(() => {
  //     if (isHeadlineVisible) {
  //       conditionalCall(isHeadlineVisible);
  //     }
  //   }, [isHeadlineVisible]);

  //   const currentValue = isHeadlineVisible ? useAnimateBackgroundPosition(0, -440, 1750, 600) : false;
  //   const currentValue = useAnimateBackgroundPosition(0, -440, 1750, 600);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={'global-wrapper--small'}>
          {/* <Link href="/blog#search" className={styles.return}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              viewBox="6 6 12 12"
              style={{ rotate: '90deg' }}>
              <path d="M7 9.79a.5.5 0 0 1 .854-.353L12 13.584l4.146-4.147a.5.5 0 1 1 .708.708L12 14.998l-4.854-4.853A.5.5 0 0 1 7 9.79Z"></path>
            </svg>{' '}
            <span>Return</span>
          </Link> */}
          <h1 className={styles.title}>{info.title}</h1>
          <div className={styles.headerImg}>
            <ImageUnoptimized
              src={info.headerImg}
              width="0"
              height="0"
              //   sizes="100vw"
              priority
              style={{ width: '100%', height: 'auto', maxHeight: '600px', objectFit: 'cover' }}
              alt={'Header Blog Image'}
            />
          </div>

          {summary && (
            <>
              <h3 style={{ paddingTop: '50px', textAlign: 'center' }}>Summary</h3>
              <p>{summary}</p>
            </>
          )}

          <div className={styles.date}>
            <span>{info.date}</span>
            <div className={styles.line} />
            <span>{info.minToRead} mins read</span>
          </div>
          {children}
        </div>
        <div className={'global-wrapper'}>
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

          <NextToRead arr={nextToReadArr} />
        </div>
        {/* <Link href="/blog"> */}
        <div className={styles.moreWrap} id={'contact'}>
          <div className={styles.potential}>
            <div className={styles.logo}>
              <div className={styles.img}>
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '70%', height: 'auto' }}
                  src={'/images/mini-logo.png'}
                  alt="HR image"
                  loading={'lazy'}
                  quality={'100'}
                />
              </div>
              <h2
                style={{
                  backgroundPosition: `${useAnimateBackgroundPosition(
                    isHeadlineVisible,
                    0,
                    -179,
                    1750,
                    600,
                  )}px 50%`,
                }}
                ref={blogHeadlineRef}>
                Blog
              </h2>
            </div>
            <p>Read new releases, get updates and latest news.</p>

            <Button style={{ pointerEvents: 'none' }} color={'black'} to={'/blog'} size={'small'}>
              Read more
            </Button>
          </div>
        </div>
        {/* </Link> */}
      </div>
      <Head>
        <meta property="og:type" content="article" />
        <meta property="og:url" content={info.slug} />
        <meta property="og:site_name" content="Social Media Blog" />
        <meta property="og:image" content={info.headerImg} />
        <meta property="og:image:secure_url" content={info.headerImg} />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image:alt" content="Easy Steps Create a Social Media Strategy" />
        <meta property="article:section" content="Social Media" />
        <script
          type="application/ld+json"
          async
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ArticleSchema) }}
        />
        <script
          type="application/ld+json"
          async
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WebSiteSchema) }}
        />
      </Head>
    </>
  );
};

export default BlogWrapper;
