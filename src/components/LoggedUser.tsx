import React from 'react';
import { useLogout, useUser } from './AuthManager';

const LoggedUser = () => {
  const user = useUser();
  const logout = useLogout();

  return (
    <div>
      <p>{user.name}</p>
      <img src={user.picture} alt={user.name} />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default LoggedUser;
