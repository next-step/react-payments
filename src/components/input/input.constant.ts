const TYPE = {
  TEXT: 'text',
  PASSWORD: 'password',
  READONLY_PASSWORD: 'readonly-password',
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
  READONLY: 'input-readonly',
} as const;

export const INPUT = {
  TYPE,
  BOX,
  CLASSNAME,
} as const;
