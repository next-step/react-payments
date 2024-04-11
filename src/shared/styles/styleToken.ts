const colors = {
  white: '#fff',
  black: '#222',
  gray100: '#f5f5f5',
  gray200: '#ecebf1',
  gray300: '#d3d3d3',
  gray400: '#9ca3af',
  gray500: '#737373',
  gray600: '#575757',
  gray700: '#525252',
  gray800: '#383838',
  teal100: '#94dacd',
  teal200: '#04C09E',
  mustard: '#cbba64',
  shadow: 'rgba(0, 0, 0, 0.25)',
  body: '#e5e5e5',
  crimson: '#E24141',
  azure: '#547CE4',
  mint: '#73BC6D',
  fuchsia: '#DE59B9',
  rose: '#E76E9A',
  amber: '#F37D3B',
  gold: '#FBCD58',
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
  bold: 700,
} as const;

const spacing = {
  mt10: '2.5rem',
  mt20: '5rem',
  mt30: '7.5rem',
  mt40: '10rem',
  mt50: '12.5rem',
  mb10: '2.5rem',
} as const;

const width = {
  w100: '100%',
  w75: '75%',
  w50: '50%',
  w25: '25%',
  w15: '15%',
} as const;

export const zIndex = {
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  toast: 1600,
  tooltip: 1700,
  loading: 1800,
} as const;

export const styleToken = {
  color: colors,
  fontSize,
  fontWeight,
  spacing,
  width,
  zIndex,
} as const;
