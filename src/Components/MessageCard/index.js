import React from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
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

const MessageCard = () => (
  <Wrapper>
    <MessageSummary />
    <MessageDescription />
  </Wrapper>
);

export default MessageCard;
