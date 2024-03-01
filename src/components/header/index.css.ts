import { style } from '@vanilla-extract/css';

export const headerStyle = style({
  display: 'flex',
  alignItems: 'center',
  padding: '0 1rem',
  gap: '1rem',
});

export const leftElement = style({});

export const rightElement = style({
  position: 'absolute',
  right: '1rem',
});
