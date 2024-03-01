const TYPE = {
  TEXT: 'text',
  PASSWORD: 'password',
} as const;

const BOX = {
  SEPARATOR: {
    HYPHEN: '-',
    SLASH: '/',
  },
} as const;

const CLASSNAME = {
  CONTAINER: 'input-container',
  TITLE: 'input-title',
  BOX: 'input-box',
  BASIC: 'input-basic',
} as const;

export const INPUT = {
  TYPE,
  BOX,
  CLASSNAME,
} as const;
