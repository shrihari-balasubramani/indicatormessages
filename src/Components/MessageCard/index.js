import React from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import PropTypes from 'prop-types';
import MessageSummary from './MessageSummary';
import MessageDescription from './MessageDescription';

const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${th.color('secondary.light')};
  border-radius: 4px;
  background: ${th.color('secondary.background')};
  width: 100%;
  height: 140px;
`;

const MessageCard = ({ message, id }) => (
  <Wrapper>
    <MessageSummary
      riskScore={message?.risk_score}
      type={message?.indicator_message_type}
    />
    <MessageDescription
      name={message?.name}
      createdAt={message?.created_at}
      source={message?.source}
      subject={message?.subject}
      id={id}
    />
  </Wrapper>
);
MessageCard.propTypes = {
  message: PropTypes.object,
  id: PropTypes.string
};

export default MessageCard;
