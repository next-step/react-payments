import { style } from '@vanilla-extract/css';

export const header = style({
  fontSize: '16px',
  fontWeight: '500',
});

export const cardNumberInputBox = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  alignItems: 'center',
  backgroundColor: '#ecebf1',
  borderRadius: '8px',
});
export const expireDateInputBox = style({
  display: 'grid',
  width: '50%',
  gridTemplateColumns: '1fr auto 1fr',
  alignItems: 'center',
  backgroundColor: '#ecebf1',
  borderRadius: '8px',
});

export const passwordInputBox = style({
  display: 'grid',
  width: 'fit-content',
  gap: '8px',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
});

export const passwordPinBox = style({
  width: '42.5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
});
