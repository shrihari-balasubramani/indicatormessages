import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import PageView from './MessageDetailsPageView';
import { fetchMessageDetails } from '../../core/store/actions/indicatorMessages';

const getMessageDetails = state => state.messageDetails;

const Page = ({ match: { params } }) => {
  const messageDetails = useSelector(getMessageDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    if (messageDetails.id !== params.messageId) {
      dispatch(fetchMessageDetails(params.messageId));
    }
  }, [params.messageId]);
  const currentMessageDetails = messageDetails.id === params.messageId && messageDetails;
  return <PageView messageDetails={currentMessageDetails} />;
};

Page.propTypes = {
  match: PropTypes.object
};

export default Page;
