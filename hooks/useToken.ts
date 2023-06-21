import { useEffect } from 'react';

import axios from 'core/blog/axios';

const useToken = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Set the token in the Axios default headers
      axios.defaults.headers.common['token'] = token;
    }
  }, []);
};

export default useToken;
