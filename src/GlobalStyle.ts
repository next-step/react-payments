import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

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
`;

export default GlobalStyle;
