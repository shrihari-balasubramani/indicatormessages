import styled, { css } from '@xstyled/styled-components';
import { th, system } from '@xstyled/system';

const normalize = css`
  margin: 0;
  line-height: 1;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  ${system};
`;

export const P = styled.p`
  color: ${th.color('secondary.darker')};
  font-size: 0.8rem;
  ${normalize}
`;

export const Span = styled.span`
  color: ${th.color('secondary.darker')};
  font-size: 0.8rem;
  ${normalize}
`;

export const H6 = styled.h6`
  color: ${th.color('secondary.darker')};
  font-size: 0.9rem;
  font-weight: 500;
  ${normalize}
`;
