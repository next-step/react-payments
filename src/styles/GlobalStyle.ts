import { css } from '@emotion/react';
export const globalStyleCss = css`
  * {
    box-sizing: border-box;
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

  .root {
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
  }
`;
