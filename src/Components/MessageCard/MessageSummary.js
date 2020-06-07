import React from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import { P, Span, H6 } from '../Typography';

const SummaryWrapper = styled.div`
  display: flex;
  position: relative;
  border-right: 1px solid ${th.color('secondary.light')};
  width: 22%;
`;

const Score = styled(P)`
  color: ${th.color('secondary.background')};
  padding: 0 2;
  background: ${th.color('positive')};
  height: fit-content;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
  border-radius: 1;
`;

const Type = styled(P)`
  color: ${th.color('secondary.lighter')};
  background: ${th.color('secondary.dark')};
  height: fit-content;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
  padding: 1 0;
`;

const MessageSummary = () => (
  <SummaryWrapper>
    <Score>50</Score>
    <Type>Financial stability supplier</Type>
  </SummaryWrapper>
);

export default MessageSummary;
