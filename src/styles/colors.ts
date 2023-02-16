export const colors = {
  primary: '#04C09E',
  red: '#E24141',
  green: '#73BC6D',
  yellow: '#FBCD58',
  darkPink: '#DE59B9',
  lightPink: '#E76E9A',
  orange: '#F37D3B',
  blue: '#547CE4',
} as const;

export type Colors = keyof typeof colors;
