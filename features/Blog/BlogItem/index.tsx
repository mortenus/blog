import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './BlogItem.module.scss';
import BlogImage from '../Image';
import { useIsVisible } from 'hooks/useIsVisible';

type TBlogItemBase = {
  date: string;
  title: string;
  description?: string;
  imgUrl: any;
  featured?: boolean;
  itemCount?: number;
  customRef?: any;
  type?: string;
  animation?: string | boolean;
  isFavorited?: boolean | null;
  handleFavoriteSend?: Function;
  modal?: string;
};

interface TBlogItemOnClick extends TBlogItemBase {
  onClick: () => void | Function;
  slug?: never;
}

interface TBlogItemLink extends TBlogItemBase {
  slug: string;
  onClick?: never;
}

type TBlogItem = TBlogItemOnClick | TBlogItemLink;

const BlogItem = ({
  date,
  title,
  description,
  imgUrl,
  slug,
  featured,
  itemCount,
  onClick,
  customRef,
  type,
  animation = true,
  isFavorited,
  handleFavoriteSend,
  modal,
}: TBlogItem) => {
  //   const ref = React.useRef(null);
  const ref = customRef || React.useRef(null);
  const isVisible = useIsVisible({ ref, once: true });

  const [favorited, setFavorited] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    if (isFavorited === undefined || isFavorited === null) return setFavorited(null);

    setFavorited(isFavorited);
  }, [isFavorited]);

  const handleFavoriteChange = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    // console.log('clicked');
    if (!handleFavoriteSend) return;
    const isSuccess = await handleFavoriteSend(slug);
    isSuccess && setFavorited(!favorited);
  };

  return slug ? (
    <div
      className={clsx(styles.item, styles[`item-${itemCount}`], {
        [styles.visible]: !animation || isVisible,
        [styles[`item--featured`]]: featured,
      })}
      ref={ref}>
      <Link href={slug} tabIndex={0} />
      <div className={styles.imageWrap}>
        {/* <Image
            width="0"
            height="0"
            sizes="100vw"
            //   style={{ width: '100%', height: 'auto' }}
            src={imgUrl}
            alt={'blog-cover'}
          /> */}
        <BlogImage url={imgUrl} />
      </div>
      <div className={styles.text}>
        <div className={styles.subhead}>
          <span>{date}</span>
          {favorited !== null && (
            <div onClick={handleFavoriteChange} style={{ zIndex: '20' }}>
              {favorited ? (
                <svg
                  width="18"
                  height="23"
                  viewBox="0 0 18 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 23V2.55556C0 1.85278 0.252 1.25095 0.756 0.750057C1.26 0.249169 1.86514 -0.000849682 2.57143 2.1694e-06H15.4286C16.1357 2.1694e-06 16.7413 0.250447 17.2453 0.751335C17.7493 1.25222 18.0009 1.85363 18 2.55556V23L9 19.1667L0 23Z"
                    fill="black"
                  />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="23"
                  viewBox="0 0 18 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 23V2.55556C0 1.85278 0.252 1.25095 0.756 0.750057C1.26 0.249169 1.86514 -0.000849682 2.57143 2.1694e-06H15.4286C16.1357 2.1694e-06 16.7413 0.250447 17.2453 0.751335C17.7493 1.25222 18.0009 1.85363 18 2.55556V23L9 19.1667L0 23ZM2.57143 19.1028L9 16.3556L15.4286 19.1028V2.55556H2.57143V19.1028Z"
                    fill="black"
                  />
                </svg>
              )}
            </div>
          )}
        </div>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </div>
  ) : (
    <div
      className={clsx(styles.item, styles[`item-${itemCount}`], {
        [styles.visible]: !animation || isVisible,
        [styles[`item--featured`]]: featured,
      })}
      ref={ref}
      onClick={onClick}>
      <div className={styles.imageWrap}>
        {/* <Image
            width="0"
            height="0"
            sizes="100vw"
            //   style={{ width: '100%', height: 'auto' }}
            src={imgUrl}
            alt={'blog-cover'}
          /> */}
        <BlogImage url={imgUrl} />
      </div>
      <div className={styles.text}>
        {type && (
          <div className={styles.type}>
            <svg
              style={{ height: '15px' }}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.9963 18H7.99627L8.9963 12.1667H5.49622C4.91621 12.1667 4.92621 11.9 5.11621 11.6167C5.30621 11.3333 5.16621 11.55 5.18621 11.5167C6.47624 9.61667 8.41628 6.78333 10.9963 3H11.9964L10.9963 8.83333H14.4964C14.9864 8.83333 15.0564 9.10833 14.9664 9.25833L14.8964 9.38333C10.9563 15.125 8.9963 18 8.9963 18Z"
                fill="#6e6e73"
              />
            </svg>
            {type}
          </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.subhead}>
          <span>{date}</span>
          {favorited !== null && modal && (
            <div onClick={handleFavoriteChange} style={{ zIndex: '20' }}>
              {favorited ? (
                <svg
                  width="18"
                  height="23"
                  viewBox="0 0 18 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 23V2.55556C0 1.85278 0.252 1.25095 0.756 0.750057C1.26 0.249169 1.86514 -0.000849682 2.57143 2.1694e-06H15.4286C16.1357 2.1694e-06 16.7413 0.250447 17.2453 0.751335C17.7493 1.25222 18.0009 1.85363 18 2.55556V23L9 19.1667L0 23Z"
                    fill="black"
                  />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="23"
                  viewBox="0 0 18 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 23V2.55556C0 1.85278 0.252 1.25095 0.756 0.750057C1.26 0.249169 1.86514 -0.000849682 2.57143 2.1694e-06H15.4286C16.1357 2.1694e-06 16.7413 0.250447 17.2453 0.751335C17.7493 1.25222 18.0009 1.85363 18 2.55556V23L9 19.1667L0 23ZM2.57143 19.1028L9 16.3556L15.4286 19.1028V2.55556H2.57143V19.1028Z"
                    fill="black"
                  />
                </svg>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(BlogItem);
