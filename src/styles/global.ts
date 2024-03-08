import { css } from '@emotion/css'
import { color } from './theme/color'
import { font } from '.'

export const globalCSS = css`
  body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    background-color: ${color.bgGray03};
  }

  input {
    font-size: 16px;
  }

  .root {
    background-color: ${color.white};
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

  .page-title {
    ${font.subtitle03M};
    line-height: 22px;
    display: flex;
    align-items: center;

    color: ${color.grayscale01};
  }
`
