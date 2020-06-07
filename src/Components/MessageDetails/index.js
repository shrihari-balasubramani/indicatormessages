import React from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import { P, Span, H6 } from '../Typography';

const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${th.color('secondary.light')};
  border-radius: 4px;
  background: ${th.color('secondary.background')};
  width: 100%;
  height: 140px;
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

const Heading = () => (
  <HeadingWrapper>
    <P>Industrial disputes at location</P>
  </HeadingWrapper>
);

const RiskScoreBar = () => <div></div>;

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

const MetaSection = () => (
  <MetaWrapper>
    <Type>Location disputes</Type>
    <P fontSize={'0.65rem'} ml={2} mt={4}>
      Valid until blka blad
    </P>
    {/* <RiskScoreBar />
     */}
  </MetaWrapper>
);

const DetailsWrapper = styled.div`
  width: 65%;
  border-right: 1px solid ${th.color('secondary.light')};
  padding: 2;
`;

const DetailsSection = () => (
  <DetailsWrapper>
    <P color='secondary.main' fontSize={'0.6rem'}>
      Created on by bnladwda
    </P>
    <P color='secondary.main' fontSize={'0.6rem'}>
      Source
    </P>
    <H6 mt={2} mb={4}>
      Paris
    </H6>
    <P>laowdjda awdkdpaw wdaojdoaw wadpokjdaow</P>
  </DetailsWrapper>
);

const ScoreWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 20%;
`;

const ScoreSection = () => (
  <ScoreWrapper>
    <H6 fontSize='2rem' mb={4}>
      80 <Span>(80)</Span>
    </H6>
    <P>Risk score already set</P>
  </ScoreWrapper>
);

const MessageDetails = () => (
  <Wrapper>
    <Heading />
    <MetaSection />
    <DetailsSection />
    <ScoreSection />
  </Wrapper>
);

export default MessageDetails;
