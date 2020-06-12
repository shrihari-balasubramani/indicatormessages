import React from 'react';
import styled from '@xstyled/styled-components';
import moment from 'moment';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { P, Span, H6 } from '../Typography';
import Button from '../Button';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  padding: 4;
  flex-direction: column;
  width: 78%;
  & > * {
    margin-bottom: 2;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// we can make this a seperate button
const DetailsBtn = styled(Button)`
  position: absolute;
  bottom: 8px;
  right: 8px;
`;

const MessageDescription = ({
  name, source, createdAt, subject, id
}) => (
  <Wrapper>
    <H6>{name}</H6>
    <ContentWrapper>
      <Span variant='caption' color='secondary.main' fontSize='0.6rem'>
        Created : {moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}
      </Span>
      <Span variant='caption' color='secondary.main' fontSize='0.6rem'>
        Source : {source}
      </Span>
    </ContentWrapper>
    <P>
      Indicator: <Span fontWeight='700'> {subject} </Span>
    </P>
    <Link to={`/message_details/${id}`}>
      <DetailsBtn>
        <Span>Details</Span>
      </DetailsBtn>
    </Link>
  </Wrapper>
);
MessageDescription.propTypes = {
  name: PropTypes.string,
  source: PropTypes.string,
  createdAt: PropTypes.string,
  subject: PropTypes.string,
  id: PropTypes.string
};

export default MessageDescription;
