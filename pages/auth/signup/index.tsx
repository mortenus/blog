import React from 'react';

import RegisterForm from 'modules/RegisterForm';

import styles from './signin.module.scss';

export default function SignIn() {
  return (
    <div className={'global-wrapper--small'} style={{ padding: '100px 0' }}>
      <RegisterForm />
    </div>
  );
}
