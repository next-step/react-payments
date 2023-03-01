import { css, Global } from '@emotion/react';

const globalStyleCss = css`
  * {
    box-sizing: border-box;
  }

  li,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
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

    appearance: none;
    border: none;
    outline: none;
  }

  #root {
    background-color: #fff;
    width: 375px;
    min-width: 375px;
    height: 700px;
    position: relative;
    border-radius: 15px;
    padding: 16px 24px;
  }
`;

const GlobalStyle = () => <Global styles={globalStyleCss} />;

export default GlobalStyle;
