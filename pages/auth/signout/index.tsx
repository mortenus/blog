import React from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  React.useEffect(() => {
    localStorage.clear();
    localStorage.setItem('isAuth', 'true');
  }, []);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/');
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return <h2>Logging out...</h2>;
}

Custom404.title = 'Log Out';
