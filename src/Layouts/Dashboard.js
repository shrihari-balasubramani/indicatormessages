import React from 'react';
import styled from '@xstyled/styled-components';
// import { useColorMode } from '@xstyled/styled-components';

const LayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ElementCanvas = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 10 0;
`;

const Layout = ({ children }) => (
  <LayoutWrapper>
    <ElementCanvas>{children}</ElementCanvas>
  </LayoutWrapper>
);
export default Layout;
