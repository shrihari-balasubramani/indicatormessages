import React from 'react';
import Layout from '../../Layouts/Dashboard';
import MessagesList from './MessagesList';
import Filters from '../../Components/Filters';
import styled from '@xstyled/styled-components';

const messages = [1, 2, 3, 4, 4];

const MessagesWithFilter = styled.div`
  display: flex;
  width: 100%;
  & .small-portion {
    width: 30%;
    padding: 2;
    box-sizing: border-box;
  }
  & .large-portion {
    width: 70%;
    padding: 2;
    box-sizing: border-box;
  }
`;

const PageView = () => (
  <Layout>
    <MessagesWithFilter>
      <div className='small-portion'>
        <Filters />
      </div>
      <div className='large-portion'>
        <MessagesList messages={messages} />
      </div>
    </MessagesWithFilter>
  </Layout>
);

export default PageView;

// index -> filters, messagesList.
