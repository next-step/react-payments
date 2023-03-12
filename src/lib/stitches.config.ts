import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

export type CSS = Stitches.CSS<typeof config>;

export const { styled, css, theme, config, keyframes } = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',
      grey1: '#DBDBDB',
      grey2: '#999999',
      grey3: '#666666',
      grey4: '#333333',
      shadow0: '#0000001a',
      danger: '#EF6F6F',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
      10: '130px',
      11: '320px',
      12: '550px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
      10: '130px',
      11: '320px',
      12: '550px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
      7: '27px',
      8: '35px',
      9: '59px',
    },
  },
  utils: {
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
  },
});
