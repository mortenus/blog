import { withFormik } from 'formik';
import { withRouter } from 'next/router';
import LoginForm from '../components/LoginForm';

import validateForm from 'utils/validate';
import axios from 'core/blog/axios';
// import { userActions } from 'redux/actions';

// import store from 'redux/store';

const LoginFormContainer = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validate: (values) => {
    const errors = {};

    validateForm({ values, errors });

    return errors;
  },
  handleSubmit: (values, { setSubmitting, props }) => {
    // const router = useRouter();
    const { router } = props;

    axios
      .post('http://localhost:3001/user/signin', values)
      .then(({ data }) => {
        const { token } = data;
        window.axios.defaults.headers.common['token'] = token;

        //   window.localStorage['token'] = token;
        localStorage.setItem('token', token);

        axios
          .get('http://localhost:3001/user/me')
          .then(({ data }) => {
            localStorage.setItem('user', JSON.stringify(data));
            localStorage.setItem('isAuth', true);

            //   window.localStorage['data'] = data;
            //   window.localStorage['isAuth'] = true;

            router.push('/');
          })
          .catch((err) => {
            if (err.response && err.response.status === 403) {
              delete window.localStorage.token;
              delete window.localStorage.data;
            }
          });
      })
      .catch(({ response }) => {
        if (
          response &&
          (response.status === 403 || response.status === 422 || response.status === 404)
        ) {
          alert('There has been an error while loggin in your account');
        }
      });
    //     store
    //       .dispatch(userActions.fetchUserLogin(values))
    //       .then(({ status }) => {
    //         if (status === 'success') {
    //           props.history.push('/');
    //         }
    //         setSubmitting(false);
    //       })
    //       .catch(() => {
    //         setSubmitting(false);
    //       });
    //   },
  },
  displayName: 'LoginForm',
})(LoginForm);

export default withRouter(LoginFormContainer);
