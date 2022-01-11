import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    background-color: #e5e5e5;
  }

  input {
    font-size: 16px;
  }
`;

export default GlobalStyle;
