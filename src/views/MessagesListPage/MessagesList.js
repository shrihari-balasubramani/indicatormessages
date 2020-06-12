import React from 'react';
import styled from '@xstyled/styled-components';
import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';
import MessageCard from '../../Components/MessageCard';
import { H6 } from '../../Components/Typography';

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 5;
  }
`;

const MessagesList = ({
  messages, meta, pageNumber, setPageNumber
}) => {
  const handleChange = (event, value) => {
    setPageNumber(value);
  };
  return (
    <ListWrapper>
      <H6>Indicator Messages</H6>
      <Pagination
        count={meta?.total_pages}
        page={pageNumber}
        onChange={handleChange}
      />
      {messages.map((eachMessage, count) => (
        <MessageCard
          key={count}
          message={eachMessage?.attributes}
          id={eachMessage.id}
        />
      ))}
    </ListWrapper>
  );
};

MessagesList.propTypes = {
  messages: PropTypes.array,
  meta: PropTypes.object,
  pageNumber: PropTypes.number,
  setPageNumber: PropTypes.func
};

export default MessagesList;
