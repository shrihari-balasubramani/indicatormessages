import { createGlobalStyle } from 'styled-components';
import { th } from '@xstyled/system';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
	font-size: 16px;
	font-stretch: normal;
	line-height: normal;
	letter-spacing: normal;   
	box-sizing: border-box;
	margin: 0; 
	background: ${th.color('primary.background')};
  }
`;
export default GlobalStyles;
