import { createTheme } from '@stitches/react';

const red = createTheme({
  colors: {
    cardBackground: '#E24141',
    inputColor: '#E24141',
  },
});

const blue = createTheme({
  colors: {
    cardBackground: '#547CE4',
    inputColor: '#547CE4',
  },
});

const green = createTheme({
  colors: {
    cardBackground: '#73BC6D',
    inputColor: '#73BC6D',
  },
});

const purple = createTheme({
  colors: {
    cardBackground: '#DE59B9',
    inputColor: '#DE59B9',
  },
});

const mint = createTheme({
  colors: {
    cardBackground: '#4BD1B9',
    inputColor: '#4BD1B9',
  },
});

const pink = createTheme({
  colors: {
    cardBackground: '#E76E9A',
    inputColor: '#E76E9A',
  },
});

const orange = createTheme({
  colors: {
    cardBackground: '#F37E3B',
    inputColor: '#F37E3B',
  },
});

const yellow = createTheme({
  colors: {
    cardBackground: '#FBCD58',
    inputColor: '#FBCD58',
  },
});

export const themes = {
  red,
  blue,
  green,
  purple,
  mint,
  pink,
  orange,
  yellow,
} as const;

export type Themes = keyof typeof themes;
