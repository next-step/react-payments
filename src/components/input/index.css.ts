import { style, styleVariants } from '@vanilla-extract/css';

export const inputBox = styleVariants({
  default: {
    backgroundColor: '#ecebf1',
    borderRadius: '8px',
    display: 'flex',
  },
  underline: {
    borderBottom: '1px solid black',
  },
});

export const inputBlock = styleVariants({
  true: {
    flexGrow: 1,
  },
  false: {},
});

export const inputElement = style({
  border: 'none',
  backgroundColor: 'transparent',
  width: '100%',
  padding: '12px',
  color: '#04C09E',
});