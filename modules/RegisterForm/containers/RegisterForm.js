import { withFormik } from 'formik';
import { withRouter } from 'next/router';

import RegisterForm from '../components/RegisterForm';

// import { userActions } from 'redux/actions';
import validateFunc from 'utils/validate';
import axios from 'core/blog/axios';
import { useRouter } from 'next/router';

// import store from 'redux/store';

const RegisterFormContainer = withFormik({
  mapPropsToValues: () => ({
    email: '',
    fullname: '',
    password: '',
    password_2: '',
  }),
  validate: (values) => {
    const errors = {};

    validateFunc({ isAuth: false, values, errors });

    return errors;
  },
  handleSubmit: (values, { setSubmitting, props }) => {
    const { router } = props;

    axios
      .post('http://localhost:3001/user/signup', values)
      .then(({ status }) => {
        if (status === 'success') {
          router.push('/auth/signin');
        }
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
      });
    // store
    //   .dispatch(userActions.fetchUserRegister(values))
    //   .then(({ status }) => {
    //     if (status === 'success') {
    //       setTimeout(() => {
    //         props.history.push('/');
    //       }, 50);
    //     }
    //     setSubmitting(false);
    //   })
    //   .catch(() => {
    //     setSubmitting(false);
    //   });
  },
  displayName: 'RegisterForm',
})(RegisterForm);

export default withRouter(RegisterFormContainer);
