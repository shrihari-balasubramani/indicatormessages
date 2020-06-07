import React from 'react';
import { useDispatch } from 'react-redux';
import LoginPage from './LoginPageView';
import { logMeIn } from '../../core/store/actions';

const Page = () => {
  const dispatch = useDispatch();
  const onClick = (username, password) => {
    console.log('awdhwd');
    dispatch(logMeIn(username, password));
  };
  return <LoginPage loginFailed={true} onClick={onClick} />;
};

export default Page;
