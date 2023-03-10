import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import styles from './Button.module.scss';

import TButton from './Button.types';

const Button = ({
  children,
  type,
  status,
  to,
  onClick,
  disabled,
  style,
  size,
  color,
  tabIndex,
  onKeyDown,
}: TButton) => {
  const stylying = clsx(
    styles.wrapper,
    { [styles['wrapper--disabled_black']]: disabled === 'black' },
    { [styles['wrapper--disabled_white']]: disabled === 'white' },
    { [styles.black]: color === 'black' },
    { [styles.white]: color === 'white' },
    { [styles.wrapper_nav]: type === 'nav' },
    { [styles.wrapper_search]: type === 'search' },
    { [styles.wrapper_submit]: type === 'submit' },
    { [styles.success]: status === 'success' },
    { [styles.fail]: status === 'fail' },
    { [styles.small]: size === 'small' },
    { [styles.medium]: size === 'medium' },
    { [styles.large]: size === 'large' },
  );

  return (
    <>
      {!onClick ? (
        <Link href={to ? to : '#'}>
          <div style={style && style} className={stylying}>
            {children}
          </div>
        </Link>
      ) : (
        <div
          style={style && style}
          onClick={onClick}
          className={stylying}
          tabIndex={tabIndex || 0}
          onKeyDown={onKeyDown}>
          {children}
        </div>
      )}
    </>
  );
};

export default React.memo(Button);
