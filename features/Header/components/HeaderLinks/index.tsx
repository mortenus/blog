import HeaderButton from '../HeaderButton';
import Link from 'next/link';
import React from 'react';

import styles from './HeaderLinks.module.scss';
import { useRouter } from 'next/router';

const linkRows = [
  //   {
  //     id: 0,
  //     title: 'About',
  //     href: '/about',
  //   },
  {
    id: 0,
    title: 'Home',
    href: '/',
  },
  {
    id: 1,
    title: 'Blog',
    href: '/blog',
  },

  {
    id: 2,
    title: 'More',
    links: [
      {
        title: 'About',
        description: 'Get to know who we are, what we stand for, and benefit with us',
        href: '/about',
      },
      {
        title: 'Get Motivated',
        description: 'Discover a world of motivation with powerful quotes',
        href: '/quotes',
      },
    ],
  },

  //   {
  //     id: 2,
  //     title: 'More',
  //     links: [
  //       {
  //         title: 'About',
  //         description: 'Get to know who we are and what we stand for.',
  //         href: '/about',
  //       },
  //       {
  //         title: 'Blog',
  //         description: 'Read new releases, get updates and latest news.',
  //         href: '/blog',
  //       },
  //     ],
  //   },

  //   {
  //     id: 1,
  //     title: 'Portfolio',
  //     href: '/#portfolio',
  //   },
  //   {
  //     id: 2,
  //     title: 'Blog',
  //     href: '/blog',
  //   },
];

const auth = {
  id: 9999,
  title: 'Auth',
  links: [
    {
      title: 'Sign in',
      description: 'Discover all the ways to get your presence in Web',
      href: '/auth/signin',
    },
    {
      title: 'Sign up',
      description: 'Get a professional to help you in your IT journey',
      href: '/auth/signup',
      // target: '_blank',
    },
  ],
};

const user = {
  id: 99999,
  links: [
    {
      title: 'Sign out',
      description: 'Log out from your account',
      href: '/auth/signout',
    },
  ],
};

export interface IUser extends Document {
  email: string;
  fullname: string;
}

const HeaderLinks = () => {
  const [userData, setUserData] = React.useState<IUser | null>(null);

  const router = useRouter();

  const getUserDataFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');

      //   console.log('localstorage updated!', user);
      if (user) {
        const parsedUser = JSON.parse(user);
        if (parsedUser !== userData) {
          //   console.log('setUserData updated!', parsedUser);
          setUserData(parsedUser);
        }
      } else {
        setUserData(null);
      }
    }
  };

  React.useEffect(() => {
    getUserDataFromLocalStorage();
  }, [router]);

  React.useEffect(() => {
    // Register event listener
    window.addEventListener('storage', getUserDataFromLocalStorage);

    // Clean up event listener
    return () => {
      window.removeEventListener('storage', getUserDataFromLocalStorage);
    };
  }, []);
  return (
    <>
      {linkRows.map((obj) => {
        return (
          <div key={obj.id} className={styles.temp}>
            {obj.links ? (
              <HeaderButton links={obj.links ? obj.links : []}>{obj.title}</HeaderButton>
            ) : (
              <Link href={obj.href ? obj.href : ''}>
                <li>{obj.title}</li>
              </Link>
            )}
          </div>
        );
      })}
      {userData === null ? (
        <div key={auth.id} className={styles.temp} style={{ flex: 1 }}>
          <HeaderButton links={auth.links ? auth.links : []}>{auth.title}</HeaderButton>
        </div>
      ) : (
        <div key={auth.id} className={styles.temp} style={{ flex: 1 }}>
          <HeaderButton links={user.links ? user.links : []}>{userData.fullname}</HeaderButton>
        </div>
      )}
    </>
  );
};

export default React.memo(HeaderLinks);
