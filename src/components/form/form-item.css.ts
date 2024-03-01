import { style, styleVariants } from '@vanilla-extract/css';

const base = style({
  display: 'flex',
  marginBottom: '28px',
  width: '100%',
});

export const formItem = styleVariants({
  true: [
    base,
    {
      flexDirection: 'column',
    },
  ],
  false: [
    base,
    {
      flexDirection: 'row',
    },
  ],
});

export const formItemLabel = style({
  fontSize: '12px',
  color: '#525252',
  marginBottom: '8px',
});
