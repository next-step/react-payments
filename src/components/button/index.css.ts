import { style, styleVariants } from '@vanilla-extract/css';

const buttonBase = style({
  border: 'none',
  cursor: 'pointer',
  padding: '8px 16px',
  borderRadius: '4px',
  backgroundColor: 'transparent',
  ':hover': {
    filter: 'brightness(1.4)',
  },
});

export const buttonType = styleVariants({
  primary: [
    buttonBase,
    {
      backgroundColor: 'blue',
      color: 'white',
    },
  ],
  secondary: [
    buttonBase,
    {
      border: '1px solid rgba(0, 0, 0, 0.1)',
      ':hover': {
        borderColor: 'blue',
        color: 'blue',
      },
    },
  ],
  text: [
    buttonBase,
    {
      ':hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
      },
    },
  ],
});
