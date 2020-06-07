import React from 'react';
import styled from '@xstyled/styled-components';
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

const MessageDescription = () => (
  <Wrapper>
    <H6>GDP Per capita </H6>
    <ContentWrapper>
      <Span variant='caption' color='secondary.main' fontSize='0.6rem'>
        Created on bla bla bla
      </Span>
      <Span variant='caption' color='secondary.main' fontSize='0.6rem'>
        Source is bla bla bla
      </Span>
    </ContentWrapper>
    <P>
      Indicator: <Span fontWeight='700'> unemployment rate value: high </Span>
    </P>
    <DetailsBtn>
      <Span>Details</Span>
    </DetailsBtn>
  </Wrapper>
);

export default MessageDescription;
