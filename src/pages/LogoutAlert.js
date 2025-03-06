import { useEffect } from 'react';

const LogoutAlert = () => {
  useEffect(() => {
    const logoutTimer = setTimeout(() => {
      alert('Вы вышли из аккаунта');
      window.location.href = '/';
    }, 15 * 60 * 1000);

    return () => clearTimeout(logoutTimer);
  }, []);
  return null;
};

export default LogoutAlert;
