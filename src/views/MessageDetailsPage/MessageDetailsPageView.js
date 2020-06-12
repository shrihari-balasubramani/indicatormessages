import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from '@xstyled/styled-components';
import Layout from '../../Layouts/Dashboard';
import MessageDetails from '../../Components/MessageDetails';
import { P } from '../../Components/Typography';
import Spinner from '../../Components/Spinner';

const StyledLink = styled(Link)`
  margin-bottom: 8;
  text-decoration: none;
  display: block;
`;

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

const PageView = ({ messageDetails }) => (
  <Layout>
    {messageDetails ? (
      <>
        <StyledLink to='/messages'>
          <P> &lt; Go to indicator messages</P>
        </StyledLink>
        <MessageDetails {...messageDetails.attributes} />
      </>
    ) : (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    )}
  </Layout>
);

PageView.propTypes = {
  messageDetails: PropTypes.object
};

export default PageView;
