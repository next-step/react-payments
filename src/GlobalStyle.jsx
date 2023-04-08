import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    display: flex !important;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    background-color: #e5e5e5;
  }
  
  #root {
    background-color: #fff;
    width: 375px;
    min-width: 375px;
    height: 700px;
    position: relative;
    border-radius: 15px;
  }
  
  .app {
    height: 100%;
    padding: 16px 24px;
    position: relative;
  }
  
  main {
    max-height: 600px;
    min-height: 500px;
  }
  
  form {
    position: relative;
  }
`;

export default GlobalStyle;
