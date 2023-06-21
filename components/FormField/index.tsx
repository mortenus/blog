import React from 'react';
import { Form, Input } from 'antd';
import validateAuth from 'utils/validateAuth';

const FormField = ({
  name,
  placeholder,
  Icon,
  type,
  handleChange,
  handleBlur,
  touched,
  errors,
  values,
}: any) => {
  return (
    <div>
      <Form.Item
        validateStatus={validateAuth(name, touched, errors)}
        hasFeedback
        help={!touched[name] ? undefined : errors[name]}>
        <Input
          id={name}
          prefix={Icon}
          size="large"
          placeholder={placeholder}
          value={values[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          type={type}
        />
      </Form.Item>
    </div>
  );
};

export default FormField;
