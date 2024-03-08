import { css } from '@emotion/css'
import { color } from '../theme/color'

export const inputCSS = css`
  .input-container {
    margin: 16px 0;
  }

  .input-box {
    display: flex;
    align-items: center;
    margin-top: 0.375rem;
    color: ${color.textInput};
    border-radius: 0.25rem;
    background-color: ${color.bgGray02};
  }

  .input-title {
    display: flex;
    align-items: center;

    font-size: 12px;
    line-height: 14px;

    margin-bottom: 4px;

    color: ${color.grayscale03};
  }

  .input-basic {
    background-color: ${color.bgGray02};
    height: 45px;
    width: 100%;
    text-align: center;
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-color: ${color.grayscale04};
    border: none;
    border-radius: 0.25rem;
  }

  .input-underline {
    text-align: center;
    border: none;
    background: none;
    outline: none;

    margin: 16px 0;
    padding: 4px 0;

    border-bottom: 1px solid ${color.grayscale01};
  }
`
