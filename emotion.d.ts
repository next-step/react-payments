import { theme } from '@/styles/colors';
import '@emotion/react';

type ThemeType = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
