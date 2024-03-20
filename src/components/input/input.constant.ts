import { SYMBOL } from '@/constants/symbol';

const TYPE = {
  TEXT: 'text',
  PASSWORD: 'password',
} as const;

const BOX = {
  SEPARATOR: {
    HYPHEN: SYMBOL.HYPHEN,
    SLASH: SYMBOL.SLASH,
  },
} as const;

const CLASSNAME = {
  CONTAINER: 'input-container',
  TITLE: 'input-title',
  BOX: 'input-box',
  BASIC: 'input-basic',
  READONLY: 'input-readonly',
} as const;

const REGEX = {
  DIGIT: /\D/g,
  ALPHABET: /[^a-zA-Z]/g,
};

export const INPUT = {
  TYPE,
  REGEX,
  BOX,
  CLASSNAME,
} as const;
