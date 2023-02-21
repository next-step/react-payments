export const colors = {
  primary: '#04C09E',
  red: '#E24141',
  green: '#73BC6D',
  yellow: '#FBCD58',
  darkPink: '#DE59B9',
  lightPink: '#E76E9A',
  orange: '#F37D3B',
  blue: '#547CE4',
  brown: '#cbba64',
  gray0: '#e5e5e5',
  gray1: '#ecebf1',
  gray2: '#525252',
  gray3: '#575757',
  gray4: '#383838',
} as const;

export const theme = {
  colors,
};
export type Colors = keyof typeof colors;
