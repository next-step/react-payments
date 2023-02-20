import { createGlobalStyle, css } from "styled-components";

export const resetRightSideBorderRadius = css`
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
`;

export const resetLeftSideBorderRadius = css`
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
`;

export const resetInputBorderRadius = css`
  .right-side-none-border-radius input {
    ${resetRightSideBorderRadius}
  }

  .left-side-none-border-radius input {
    ${resetLeftSideBorderRadius}
  }

  .both-side-none-border-radius input {
    ${resetRightSideBorderRadius}
    ${resetLeftSideBorderRadius}
  }
`;

const GlobalStyle = createGlobalStyle`
    body {
        display: flex;
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

    .App {
        height: 100%;
        padding: 16px 24px;
    }
`;

export default GlobalStyle;
