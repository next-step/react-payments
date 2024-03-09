import { style } from '@vanilla-extract/css';

export const flexGrow = style({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});
export const header = style({
  fontSize: '16px',
  fontWeight: '500',
});
export const listContainer = style({
  listStyle: 'none',
  width: '100%',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
});

export const listItem = style({
  display: 'flex',
  flexDirection: 'column-reverse',
  alignItems: 'center',
  gap: '8px',
});

export const link = style({
  textDecoration: 'none',
  backgroundColor: '#E5E5E5',
  textAlign: 'center',
  borderRadius: '4px',
  width: '240px',
  height: '140px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px',
  fontWeight: 'bold',
  selectors: {
    '&:hover': {
      backgroundColor: '#D5D5D5',
    },
  },
});
