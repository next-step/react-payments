import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

export type CSS = Stitches.CSS<typeof config>;

export const { styled, css, theme, config } = createStitches({
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
  },
});
