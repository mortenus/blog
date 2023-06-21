import React from 'react';
import { Form } from 'antd';

import { Button, Block, FormField } from 'components';
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';
import Link from 'next/link';

const onFinish = (values) => {
  console.log('Received values of form: ', values);
};

const success = false;

const RegisterForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting, isValid } =
    props;

  return (
    <div>
      <div className="auth__top">
        <h2>Register</h2>
        <p>Register using your email, name and password.</p>
      </div>
      <Block>
        {!success ? (
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
              name="fullname"
              placeholder="Your name and lastname"
              Icon={<UserOutlined className="site-form-item-icon" />}
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

            <FormField
              name="password_2"
              placeholder="Repeat password"
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
              <Button disabled={isSubmitting} onClick={handleSubmit} type="primary" size="large">
                Sign up
              </Button>
            </Form.Item>

            <Link className="auth__register-link" href="/auth/signin">
              Log In
            </Link>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div>
              <InfoCircleTwoTone />
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
          </div>
        )}
      </Block>
    </div>
  );
};

export default RegisterForm;
