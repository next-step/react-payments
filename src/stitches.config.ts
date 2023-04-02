import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      cardBackground: '#e5e5e5',
      cardNumber: '#575757',
      inputColor: 'black',
    },
  },
  utils: {
    // @ts-ignore
    flexCenter: (value = 'row') => ({
      display: 'flex',
      flexDirection: value,
      alignItems: 'center',
      justifyContent: 'center',
    }),
    app: () => ({
      height: '100%',
      padding: '16px 24px',
    }),
  },
});
