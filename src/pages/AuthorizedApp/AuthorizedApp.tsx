import React from 'react';
import { MembersManager } from '../../components/MembersManager/MembersManager';
import LoggedUser from '../../components/LoggedUser/LoggedUser';

const AuthorizedApp = () => {
  return (
    <>
      <LoggedUser />
      <MembersManager loading={false} members={undefined} />
    </>
  );
};

export default AuthorizedApp;
