import { Global, css } from '@emotion/react';
import { styleToken } from '@/shared/styles';

export const GlobalStyles = () => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: ${styleToken.color.gray200};
        margin: 0 auto;
      }
    `}
  />
);
