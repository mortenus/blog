import axios from 'axios';

if (typeof window !== 'undefined') {
  axios.defaults.baseURL = window.location.origin;
  axios.defaults.headers.common['token'] = window.localStorage.token;

  window.axios = axios;
}

export default axios;
