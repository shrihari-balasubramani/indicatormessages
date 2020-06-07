import React from 'react';
import styled from '@xstyled/styled-components';
import MessageCard from '../../Components/MessageCard';
import { H6 } from '../../Components/Typography';

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 5;
  }
`;

const MessagesList = ({ messages }) => (
  <ListWrapper>
    <H6>Indicator Messages</H6>
    {messages.map((eachMessage, count) => (
      <MessageCard key={count} />
    ))}
  </ListWrapper>
);

export default MessagesList;
