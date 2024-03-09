import { style, styleVariants } from '@vanilla-extract/css';

const cardBoxBase = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '16px',
  borderRadius: '4px',
  boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.25)',
  height: '100%',
  margin: '0 auto',
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
  BRAND1: { backgroundColor: '#94dacd' },
  BRAND2: { backgroundColor: '#00FF00' },
  BRAND3: { backgroundColor: '#0000FF' },
  BRAND4: { backgroundColor: '#FFFF00' },
  BRAND5: { backgroundColor: '#FF00FF' },
  BRAND6: { backgroundColor: '#00FFFF' },
  BRAND7: { backgroundColor: '#800080' },
  BRAND8: { backgroundColor: '#008080' },
  UNKNOWN: {
    backgroundColor: 'gray',
  },
});

export const brand = style({
  fontSize: '10px',
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
