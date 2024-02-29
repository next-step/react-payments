const FACTORY = {
  TEXT: {
    TYPE: 'text',
  },
  PASSWORD: {
    TYPE: 'password',
  },
} as const;

const SEPARATOR = {
  HYPHEN: '-',
  SLASH: '/',
} as const;

export const INPUT = {
  FACTORY,
  SEPARATOR,
} as const;
