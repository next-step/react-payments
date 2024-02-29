const colors = {
  white: '#fff',
  gray100: '#f5f5f5',
  gray200: '#ecebf1',
  gray300: '#d3d3d3',
  gray400: '#9ca3af',
  gray500: '#575757',
  gray600: '#525252',
  gray700: '#383838',
  teal: '#94dacd',
  mustard: '#cbba64',
  shadow: 'rgba(0, 0, 0, 0.25)',
  body: '#e5e5e5',
} as const;

const fontSize = {
  caption: '12px',
  body: '14px',
  subtitle: '16px',
  title: '18px',
  headline: '20px',
  display: '24px',
} as const;

const fontWeight = {
  regular: 400,
  medium: 500,
} as const;

export const styleToken = {
  color: colors,
  fontSize,
  fontWeight,
} as const;
