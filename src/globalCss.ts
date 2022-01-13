import { css } from "@emotion/react";

const globalCss = css`
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    font-size: 16px;
    font-family: "Noto Sans KR", sans-serif;
  }

  button {
    border: none;
    background-color: transparent;
    outline: none;
    padding: 0px;
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export default globalCss;
