const validations = ({ isAuth, values, errors }) => {
  const rules = {
    email: (value) => {
      if (!value) {
        errors.email = 'Write your E-Mail';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = 'Wrong E-Mail';
      }
    },
    password: (value) => {
      if (!value) {
        errors.password = 'Write your password';
      } else if (!isAuth && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
        errors.password = isAuth ? 'Wrong password' : 'Password is too easy';
      }
    },
    password_2: (value) => {
      if (!isAuth && value !== values.password) {
        errors.password_2 = 'Password does not match';
      }
    },
    fullname: (value) => {
      if (!isAuth && !value) {
        errors.fullname = 'Write your name and last name';
      }
    },
  };

  Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]));
};

export default validations;
