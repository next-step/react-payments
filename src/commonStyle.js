import { css } from "@emotion/react";

const commonStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e5e5e5;
  }

  li {
    list-style: none;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

export default commonStyle;
