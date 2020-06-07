import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import styled, { css } from '@xstyled/styled-components';
import { H6, Span } from '../../Components/Typography';
import { th } from '@xstyled/system';
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

const PageView = ({ loginFailed, onClick }) => {
  // if logged in re route
  // else log in
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <LoginWrapper>
      <Formfields>
        <H6>
          Please log in to continue
          <br />
          {loginFailed && (
            <StyledSpan>Please enter valid enteries and try again!</StyledSpan>
          )}
        </H6>

        <div>
          <TextField
            id='username'
            label='Username'
            type='email'
            value={username}
            onChange={event => setUsername(event.target.value)}
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
            onChange={event => setPassword(event.target.value)}
            required
          />
        </div>
        <StyledButton primary onClick={() => onClick(username, password)}>
          Log in
        </StyledButton>
      </Formfields>
    </LoginWrapper>
  );
};

export default PageView;
