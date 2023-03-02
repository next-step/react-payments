export const theme = {
  color: {
    white: '#FFFFFF',
    black: '#000000',

    brand01: '#E24141',
    brand02: '#547CE4',
    brand03: '#73BC6C',
    brand04: '#DE58B8',
    brand05: '#04C09E',
    brand06: '#8E43E7',
    brand07: '#F37D3B',
    brand08: '#FACD57',

    gray00: '#F8F9FA',
    gray01: '#F1F3F5',
    gray02: '#E9ECEF',
    gray03: '#DEE2E6',
    gray04: '#CED4DA',
    gray05: '#ADB5BD',
    gray06: '#868E96',
    gray07: '#495057',
    gray08: '#343A40',
    gray09: '#212529',

    red00: '#FFF5F5',
    red01: '#FFE3E3',
    red02: '#FFC9C9',
    red03: '#FFA8A8',
    red04: '#FF8787',
    red05: '#FF6B6B',
    red06: '#FA5252',
    red07: '#F03E3E',
    red08: '#E03131',
    red09: '#C92A2A',
  },
} as const;

export type ThemeKeys = keyof typeof theme.color;
export type ThemeHexCodes = (typeof theme.color)[ThemeKeys];
