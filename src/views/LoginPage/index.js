import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginPage from './LoginPageView';
import { logMeIn } from '../../core/store/actions/usersAuth';

const Page = () => {
  const dispatch = useDispatch();
  const getUserData = (state) => state.user;

  const logInInfo = useSelector(getUserData);

  const onClick = (username, password) => {
    dispatch(logMeIn(username, password));
  };

  return logInInfo.isAuthenticated ? (
    <Redirect
      to={{
        pathname: '/messages'
      }}
    />
  ) : (
    <LoginPage attemptState={logInInfo.attemptState} onClick={onClick} />
  );
};

export default Page;
