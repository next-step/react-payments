import { theme } from 'styles/theme';

export interface CustomTheme {
  color: typeof theme.color;
}

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
