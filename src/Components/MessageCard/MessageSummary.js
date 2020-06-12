import React from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import PropTypes from 'prop-types';
import { P } from '../Typography';

const SummaryWrapper = styled.div`
  display: flex;
  position: relative;
  border-right: 1px solid ${th.color('secondary.light')};
  width: 22%;
`;

const Score = styled(P)`
  color: ${th.color('secondary.background')};
  padding: 0 2;
  background: ${p => th.color(p.zone)};
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

const getRiskZone = (value = 0) => {
  if (value < 50) {
    return 'positive';
  } else if (value < 75) {
    return 'usual';
  } else return 'negative';
};

const MessageSummary = ({ riskScore, type }) => (
  <SummaryWrapper>
    <Score zone={getRiskZone(riskScore?.value)}>{riskScore?.value}</Score>
    <Type>{type}</Type>
  </SummaryWrapper>
);
MessageSummary.propTypes = {
  riskScore: PropTypes.object,
  type: PropTypes.string
};

export default MessageSummary;
