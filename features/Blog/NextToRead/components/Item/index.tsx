import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './Item.module.scss';

type TItem = {
  data: {
    date: string;
    title: string;
    description: string;
    imgUrl: string;
    hashtags?: string[];
  };
  slug: string;
};

const Item = ({ data, slug }: TItem) => {
  return (
    <div className={styles.item}>
      <Link href={slug} tabIndex={0}>
        <div className={styles.wrap}>
          <div className={styles.img}>
            <Image
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%' }}
              src={data.imgUrl}
              alt={'Next To Read Blog Image'}
              loading={'lazy'}
            />
          </div>
          <div className={styles.content}>
            <span className={styles.nextDate}>{data.date}</span>
            <h4>{data.title}</h4>
            <p>{data.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
