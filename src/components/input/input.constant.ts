const FACTORY = {
  TEXT: {
    TYPE: 'text',
  },
  PASSWORD: {
    TYPE: 'password',
  },
} as const;

const BOX = {
  SEPARATOR: {
    HYPHEN: '-',
    SLASH: '/',
  },
} as const;

export const INPUT = {
  FACTORY,
  BOX,
} as const;
