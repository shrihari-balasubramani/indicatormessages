import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@xstyled/styled-components';
import Layout from '../../Layouts/Dashboard';
import MessageDetails from '../../Components/MessageDetails';
import { P } from '../../Components/Typography';

const StyledLink = styled(Link)`
  margin-bottom: 8;
  text-decoration: none;
  display: block;
`;

// source
// created_at
// subject
// body
// "risk_score": {
// "available": true,
// "value": 80
// }

const PageView = ({ ...props }) => (
  <Layout>
    <StyledLink to='/messages'>
      <P> &lt; Go to indicator messages</P>
    </StyledLink>
    <MessageDetails />
  </Layout>
);

export default PageView;
