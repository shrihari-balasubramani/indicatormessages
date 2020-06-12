import React from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import moment from 'moment';
import PropTypes from 'prop-types';
import { P, Span, H6 } from '../Typography';

const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${th.color('secondary.light')};
  border-radius: 4px;
  background: ${th.color('secondary.background')};
  width: 100%;
  min-height: 140px;
  position: relative;
`;

const HeadingWrapper = styled.div`
  position: absolute;
  width: 100%;
  background: linear-gradient(
    ${th.color('secondary.background')},
    ${th.color('secondary.light')}
  );
  top: 0;
  left: 0;
  padding: 1 2;
  transform: translate(0, -100%);
  box-sizing: border-box;
  border-radius: 4px;
`;

const Heading = ({ type }) => (
  <HeadingWrapper>
    <P>type: {type}</P>
  </HeadingWrapper>
);
Heading.propTypes = {
  type: PropTypes.string
};

const Type = styled(P)`
  color: ${th.color('secondary.lighter')};
  background: ${th.color('secondary.dark')};
  height: fit-content;
  width: 100%;
  text-align: center;
  padding: 2 0 6 0;
`;

const MetaWrapper = styled.div`
  width: 15%;
  background: ${th.color('secondary.background2')};
  border-right: 1px solid ${th.color('secondary.light')};
`;

const MetaSection = ({ validUntil, type }) => (
  <MetaWrapper>
    <Type>{type}</Type>
    <P fontSize={'0.65rem'} ml={2} mt={4}>
      Valid until {moment(validUntil).format('MMMM Do YYYY, h:mm:ss a')}
    </P>
  </MetaWrapper>
);
MetaSection.propTypes = {
  validUntil: PropTypes.string,
  type: PropTypes.string
};

const DetailsWrapper = styled.div`
  width: 65%;
  border-right: 1px solid ${th.color('secondary.light')};
  padding: 2;
`;

const DetailsSection = ({
  source,
  created_at,
  subject,
  body_with_rendered_links
}) => (
  <DetailsWrapper>
    <P color='secondary.main' fontSize={'0.6rem'}>
      Created on {moment(created_at).format('MMMM Do YYYY, h:mm:ss a')}
    </P>
    <P color='secondary.main' fontSize={'0.6rem'}>
      Source : {source}
    </P>
    <H6 mt={2} mb={4}>
      {subject}
    </H6>
    <P dangerouslySetInnerHTML={{ __html: body_with_rendered_links }} />
  </DetailsWrapper>
);

DetailsSection.propTypes = {
  source: PropTypes.string,
  created_at: PropTypes.string,
  subject: PropTypes.string,
  body_with_rendered_links: PropTypes.string
};

const ScoreWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 20%;
`;

const ScoreSection = ({ available, value }) => (
  <ScoreWrapper>
    <H6 fontSize='2rem' mb={4}>
      {value} <Span>(100)</Span>
    </H6>
    <P>{available ? 'Risk score already set' : 'Risk score not set yet'}</P>
  </ScoreWrapper>
);
ScoreSection.propTypes = {
  available: PropTypes.bool,
  value: PropTypes.number
};

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
