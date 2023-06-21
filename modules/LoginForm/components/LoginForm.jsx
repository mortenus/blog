import React from 'react';
import { Form, Input } from 'antd';

import { Button, Block, FormField } from 'components';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
// import validateField from 'utils/validateAuth';
import Link from 'next/link';

const onFinish = (values) => {
  console.log('Received values of form: ', values);
};

const LoginForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit, isValid, isSubmitting } =
    props;

  const handleGoogleSignIn = async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/user/google');
      window.location.href = data.url;
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div>
      <div className="auth__top">
        <h2>Log in</h2>
        <p>Please, write your email and password</p>
      </div>
      <Block>
        <Form
          onSubmit={handleSubmit}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}>
          <FormField
            name="email"
            placeholder="E-Mail"
            Icon={<MailOutlined className="site-form-item-icon" />}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors}
            values={values}
          />
          <FormField
            name="password"
            placeholder="Password"
            type="password"
            Icon={<LockOutlined className="site-form-item-icon" />}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors}
            values={values}
          />
          <Form.Item>
            {isSubmitting && !isValid && <span>Error!</span>}
            <Button disabled={isSubmitting} onClick={handleSubmit} type="primary" size="small">
              Log in
            </Button>
            <Button onClick={handleGoogleSignIn} type="primary" size="small">
              Log in with Google
            </Button>
          </Form.Item>

          <Link className="auth__register-link" href="/auth/signup">
            Register
          </Link>
        </Form>
      </Block>
    </div>
  );
};

export default LoginForm;
