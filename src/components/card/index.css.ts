import { style, styleVariants } from '@vanilla-extract/css';

const base = style({
  padding: '16px',
  borderRadius: '4px',
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  height: '100%',
  boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.25)',
});

const cardBoxBase = style({
  margin: 'auto',
  marginBottom: '48px',
});

export const cardBox = styleVariants({
  small: [
    cardBoxBase,
    {
      width: '208px',
      height: '130px',
    },
  ],
  large: [
    cardBoxBase,
    {
      width: '290px',
      height: '180px',
    },
  ],
});

export const cardColor = styleVariants({
  BRAND1: [base, { backgroundColor: '#94dacd' }],
  BRAND2: [base, { backgroundColor: '#00FF00' }],
  BRAND3: [base, { backgroundColor: '#0000FF' }],
  BRAND4: [base, { backgroundColor: '#FFFF00' }],
  BRAND5: [base, { backgroundColor: '#FF00FF' }],
  BRAND6: [base, { backgroundColor: '#00FFFF' }],
  BRAND7: [base, { backgroundColor: '#800080' }],
  BRAND8: [base, { backgroundColor: '#008080' }],
  UNKNOWN: [
    base,
    {
      backgroundColor: 'gray',
    },
  ],
});

export const brand = style({
  // fontSize: '10px',
  fontWeight: '500',
});
const chipBase = style({
  backgroundColor: '#cbba64',
  borderRadius: '4px',
});

export const chip = styleVariants({
  small: [
    chipBase,
    {
      width: '40px',
      height: '28px',
      marginTop: '20px',
      marginBottom: '12px',
    },
  ],
  large: [
    chipBase,
    {
      width: '60px',
      height: '40px',
      marginTop: '40px',
      marginBottom: '20px',
    },
  ],
});
