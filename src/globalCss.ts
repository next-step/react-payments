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

  input {
    background: none;
    border: none;
    color: inherit;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default globalCss;
