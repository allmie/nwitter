import { signOut } from '@firebase/auth';
import { authService } from 'fbase';
import React from 'react';
import { useHistory } from 'react-router';

const Profile = () => {
  const history = useHistory();
  const onClickLogout = () => {
    signOut(authService);
    history.push('/');
  };
  return (
    <>
      <span>Profile</span>
      <button onClick={onClickLogout}>Sign out</button>
    </>
  );
};

export default Profile;
