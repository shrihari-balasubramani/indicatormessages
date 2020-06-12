import React from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import PropTypes from 'prop-types';
import {
  Heading,
  MetaSection,
  DetailsSection,
  ScoreSection
} from './MessageDetailComponents';

const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${th.color('secondary.light')};
  border-radius: 4px;
  background: ${th.color('secondary.background')};
  width: 100%;
  min-height: 140px;
  position: relative;
`;

const MessageDetails = ({
  risk_score,
  indicator_message_type,
  valid_until,
  ...rest
}) => (
  <Wrapper>
    <Heading type={indicator_message_type} />
    <MetaSection validUntil={valid_until} type={indicator_message_type} />
    <DetailsSection {...rest} />
    <ScoreSection {...risk_score} />
  </Wrapper>
);
MessageDetails.propTypes = {
  risk_score: PropTypes.object,
  indicator_message_type: PropTypes.string,
  valid_until: PropTypes.string
};

export default MessageDetails;
