import React from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 100px 100px 10px 10px;
  background: ${th.color('primary.background')};
`;

const SimulateLayout = styled.div`
  max-width: ${p => (p.fullWidth ? '1100px' : '600px')};
  width: 100%;
`;

const MessageListCanvas = ({ fullWidth, children }) => (
  <Wrapper>
    <SimulateLayout fullWidth={fullWidth}>{children}</SimulateLayout>
  </Wrapper>
);

MessageListCanvas.propTypes = {
  fullWidth: PropTypes.bool
};

export default MessageListCanvas;
