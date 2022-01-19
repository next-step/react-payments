import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }

  input {
    font-size: 16px;
  }
  input[type="number"]::-webkit-outer-spin-button, 
  input[type="number"]::-webkit-inner-spin-button { 
    -webkit-appearance: none; 
    -moz-appearance: none; appearance: none; 
  }
  input[type=number] { 
    -moz-appearance: textfield; 
  }
`;

export default GlobalStyle;
