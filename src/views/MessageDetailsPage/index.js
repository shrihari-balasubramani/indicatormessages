import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PageView from './MessageDetailsPageView';
import { fetchMessageDetails } from '../../core/store/actions';

const getMessageDetails = state => state;

const Page = ({ match: { params } }) => {
  const messageDetails = useSelector(getMessageDetails);
  const dispatch = useDispatch();
  dispatch(fetchMessageDetails(params.messageId));
  return <PageView />;
};

export default Page;
