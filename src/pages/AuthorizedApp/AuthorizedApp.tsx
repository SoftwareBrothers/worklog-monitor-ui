import React from 'react';
import { useUser, useLogout } from '../../components/AuthManager';

const AuthorizedApp = () => {
  const user = useUser();
  const logout = useLogout();
  return (
    <>
      <p>{user.name}</p>
      <img src={user.picture} alt={user.name} />
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default AuthorizedApp;
