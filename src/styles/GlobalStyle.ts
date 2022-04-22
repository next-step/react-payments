import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import utilsStyle from './utilsStyle';
import animationStyle from './animationStyle';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    background-color: #e5e5e5;
  }
  input::-webkit-inner-spin-button { 
    appearance: none; 
    -moz-appearance: none; 
    -webkit-appearance: none; 
  }
  button {
    border: 0 none;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  ${utilsStyle}
  ${animationStyle}
`;

export default GlobalStyle;
