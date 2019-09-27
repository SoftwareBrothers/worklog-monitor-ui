import React, { FC, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { User } from '../../models/User';
import { useLogin } from '../AuthManager';

const LoginButton: FC = () => {
  const login = useLogin();
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_CLIENT_ID!}
      responseType="id_token permission"
      onRequest={() => setLoading(true)}
      onFailure={error => {
        console.error(error);
        setLoading(false);
      }}
      onSuccess={async (res: any) => {
        const { profileObj, accessToken } = res;
        const { name, imageUrl, googleId } = profileObj;
        const user: User = {
          id: googleId,
          name,
          picture: imageUrl,
        };
        login(user, accessToken);
      }}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default LoginButton;
