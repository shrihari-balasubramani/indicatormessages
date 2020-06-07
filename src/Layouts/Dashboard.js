import React, { useEffect } from 'react';
import styled from '@xstyled/styled-components';
import { useColorMode } from '@xstyled/styled-components';

const LayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ElementCanvas = styled.div`
  width: 100%;
  max-width: 1100px;
`;

const Layout = ({ children }) => {
  const [colorMode, setColorMode] = useColorMode();
  useEffect(() => setColorMode('default'), []);

  return (
    <LayoutWrapper>
      <ElementCanvas>{children}</ElementCanvas>
    </LayoutWrapper>
  );
};

export default Layout;
