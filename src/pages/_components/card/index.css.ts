import { style, styleVariants } from '@vanilla-extract/css';
import { CARD_BRANDS } from '@/constants/card';
import type { CardBrand } from '@/types/card';

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

const cardColors = CARD_BRANDS.reduce((acc, brand) => {
  return {
    ...acc,
    [brand.name]: [
      base,
      {
        backgroundColor: brand.color,
      },
    ],
  };
}, {}) as Record<CardBrand, { backgroundColor: string }>;

export const cardColor: Record<'UNKNOWN' | CardBrand, string> = styleVariants({
  ...cardColors,
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
