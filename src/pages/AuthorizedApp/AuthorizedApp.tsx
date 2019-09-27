import React from 'react';
import { MembersManager } from '../../components/MembersManager/MembersManager';
import LoggedUser from '../../components/LoggedUser/LoggedUser';

const AuthorizedApp = () => {
  return (
    <>
      <LoggedUser />
      <MembersManager />
    </>
  );
};

export default AuthorizedApp;
