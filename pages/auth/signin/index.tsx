import React from 'react';

import LoginForm from 'modules/LoginForm';

import styles from './signin.module.scss';

export default function SignIn() {
  return (
    <div className={'global-wrapper--small'} style={{ padding: '100px 0' }}>
      <LoginForm />
    </div>
  );
}
