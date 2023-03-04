import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

export type CSS = Stitches.CSS<typeof config>;

export const { styled, css, theme, config } = createStitches({});
