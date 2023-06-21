import React from 'react';

import styles from './Block.module.scss';
import clsx from 'clsx';

type TBlock = {
  children: React.ReactNode;
  className?: string;
};

const Block = ({ children, className }: TBlock) => (
  <div className={clsx(styles.block, className)}>{children}</div>
);

export default Block;
