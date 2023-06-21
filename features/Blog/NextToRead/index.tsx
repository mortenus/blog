import React from 'react';
import Item from './components/Item';

import styles from './NextToRead.module.scss';

type TNextToRead = {
  arr: {
    data: {
      date: string;
      title: string;
      description: string;
      imgUrl: string;
      hashtags?: string[];
    };
    slug: string;
  }[];
};
// type TNextToRead = {
//   arr: {
//     date: string;
//     title: string;
//     description: string;
//     imgUrl: string;
//     slug: string;
//   }[];
// };

const NextToRead = ({ arr }: TNextToRead) => {
  return (
    <div className={styles.further}>
      <h3>Next to Read</h3>

      <div className={styles.items}>
        {arr && arr.map((item, i) => <Item key={i} {...item} />)}

        {/* <div className={styles.item}>
        <div className={styles.img}>
          <Image
            loading="lazy"
            fill
            src={'/uploads/1556542894631.jpg'}
            alt={'Next to Read IMG'}
          />
        </div>
        <div className={styles.content}>
          <span className={styles.nextDate}>March 14, 2023</span>
          <h4>Why Website Security is Important for Your Business</h4>
          <p>
            Website security is crucial for any business that operates online, regardless of
            its size or industry. Secure website creates strong connection between the
            users/audience because trust is one of the main ingredients of successful
            entity, whether online or offline.
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
            expertise in engineering, management, traffic marketing, and analytics working
            for large game development studios with a $1M+ monthly income. With a clear
            vision of how game development should work, I run Whimsy Games, being
            responsible for the marketing and sales of our products and services.
          </p>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default NextToRead;
