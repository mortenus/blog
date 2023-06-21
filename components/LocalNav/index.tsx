import Link from 'next/link';
import React from 'react';

import styles from './LocalNav.module.scss';
import clsx from 'clsx';
import { useRouter } from 'next/router';

const localNav = () => {
  const [searchVisible, setSearchVisible] = React.useState(false);

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (searchVisible) {
      inputRef.current && inputRef.current.focus();
    }
  }, [searchVisible]);

  const handleSearchVisible = () => {
    setSearchVisible(!searchVisible);
  };

  const [searchQuery, setSearchQuery] = React.useState('');
  const router = useRouter();

  const handleSearch = (event: any) => {
    event.preventDefault();
    router.push(`/blog/search?q=${searchQuery}`);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      handleSearch(event);
    }
  };

  return (
    <div className={styles[`intro-alternative`]}>
      <div className="global-wrapper--small">
        <div className={styles.content}>
          <span className={styles.headline}>
            <Link href="/blog">Blog</Link>
          </span>
          <ul className={styles[`menu-items`]}>
            <li className={styles.items}>
              <div
                className={clsx(styles.search, { [styles.hidden]: searchVisible })}
                onClick={handleSearchVisible}>
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
                <span>Search Blog</span>
              </div>
              <div className={clsx(styles[`search-active`], { [styles.visible]: searchVisible })}>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder={'Search Article'}
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  onKeyDown={handleKeyDown}
                />

                {/* <Button color={'white'} size="small" type={'search'} onClick={() => {}}>
                  Search
                </Button> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default localNav;
