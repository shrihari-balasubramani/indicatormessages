import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import PropTypes from 'prop-types';
import { H6, Span } from '../../Components/Typography';
import Button from '../../Components/Button';

const FlexWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoginWrapper = styled.div`
  ${FlexWrapper};
  height: 100%;
`;
const Formfields = styled.div`
  ${FlexWrapper};
  width: 600px;
  border: 1px solid ${th.color('secondary.light')};
  border-radius: 3;
  padding: 5;
  & > * {
    margin-bottom: 4;
    min-width: 270px;
  }
`;

const StyledButton = styled(Button)`
  width: 174px;
  margin-top: 5;
`;

const StyledSpan = styled(Span)`
  color: negative;
  font-weight: 800;
  font-size: 0.6rem;
`;

const PageView = ({ isAuthenticated, attemptState, onClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <LoginWrapper>
      <Formfields>
        <H6>Please log in to continue</H6>

        <div>
          <TextField
            id='username'
            label='Username'
            type='email'
            value={username}
            size='medium'
            fullWidth
            onChange={(event) => setUsername(event.target.value)}
            autoFocus
            required
          />
        </div>
        <div>
          <TextField
            id='userpassword'
            label='password'
            type='password'
            value={password}
            size='medium'
            fullWidth
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <StyledButton
          primary
          disabled={attemptState === 'loading'}
          onClick={() => onClick(username, password)}
        >
          {(attemptState === 'loading' && 'Please Wait') || 'Log in'}
        </StyledButton>
        {attemptState === 'loaded' && (
          <StyledSpan>Please enter valid enteries and try again!</StyledSpan>
        )}
      </Formfields>
    </LoginWrapper>
  );
};

PageView.propTypes = {
  isAuthenticated: PropTypes.bool,
  attemptState: PropTypes.string,
  onClick: PropTypes.func
};

export default PageView;
