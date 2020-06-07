import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';

const PositiveButtonStyle = css`
  background: ${th.color('primary.dark')};
  color: ${th.color('primary.background')};
  &: hover {
    background: ${th.color('primary.main')};
  }
`;
const Button = styled.button`
  margin: 0;
  background: ${th.color('secondary.lighter')};
  border: 1px solid ${th.color('secondary.light')};
  cursor: pointer;
  padding: 4px 16px;
  border-radius: 4px;
  outline: none;
  &: hover {
    background: ${th.color('secondary.light')};
  }
  ${p => p.primary && PositiveButtonStyle}
`;

export default Button;
