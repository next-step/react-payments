import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import utilsStyle from './assets/utils.style';

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
  ${utilsStyle}
`;

export default GlobalStyle;
