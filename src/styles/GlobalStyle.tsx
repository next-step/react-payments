import { css, Global } from '@emotion/react';

const globalStyleCss = css`
  * {
    box-sizing: border-box;
  }
  html {
    height: 100%;
  }

  li,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    background-color: #e5e5e5;
    margin: 0;
    height: 100%;
  }

  p {
    margin: 0;
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
    flex: 1;
    position: relative;
    padding: 16px 24px;
    overflow-y: scroll;
    height: 100%;
    &::-webkit-scrollbar {
      width: 0px;
      background-color: transparent;
    }
  }
`;

const GlobalStyle = () => <Global styles={globalStyleCss} />;

export default GlobalStyle;
