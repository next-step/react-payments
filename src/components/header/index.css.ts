import { style } from '@vanilla-extract/css';

export const headerStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  position: 'sticky',
  top: 0,
  backgroundColor: 'white',
});

export const rightElement = style({
  position: 'absolute',
  right: '1rem',
});
