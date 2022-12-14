import clsx from 'clsx';
import React from 'react';

import styles from './ContactInput.module.scss';

type TContactInput = {
  placeholder: string;
  size?: 'small' | 'big' | 'text';
  value: string | undefined;
  onChange: () => string;
  onBlur: (e: any) => void;
  name: string;
  help?: boolean;
};

const ContactInput = ({
  placeholder,
  name,
  size,
  value,
  onChange,
  help = false,
  onBlur,
}: TContactInput) => {
  return (
    <div
      className={clsx(
        styles.input,
        { [styles.small]: size === 'small' },
        { [styles.big]: size === 'big' },
        { [styles.text]: size === 'text' },
      )}>
      {help && (
        <label htmlFor={name} className={styles.error}>
          {help}
        </label>
      )}
      <input
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type="text"
        min={6}
      />
    </div>
  );
};

export default ContactInput;
