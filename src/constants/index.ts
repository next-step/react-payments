import { initCardState } from '@components/Card/type';

export const CARD_NUMBER = 'cardNumber';
export const EXPIRY_DATE = 'expiryDate';
export const OWNER = 'owner';
export const CVC = 'cvc';
export const PASSWORD = 'password';
export const COMPANY = 'company';
export const NICKNAME = 'nickname';
export const BG_COLOR = 'bgColor';

export const DIGITS = {
  [CARD_NUMBER]: 4,
  [EXPIRY_DATE]: 2,
  [OWNER]: 1,
  [CVC]: 1,
  [PASSWORD]: 2,
};

export const INPUT_LENGTH: {
  [k in keyof Omit<initCardState, typeof COMPANY | typeof BG_COLOR>]: number;
} = {
  [CARD_NUMBER]: 4,
  [EXPIRY_DATE]: 2,
  [OWNER]: 30,
  [PASSWORD]: 1,
  [CVC]: 3,
  [NICKNAME]: 30,
};

export const INIT_CARD_STATE: initCardState = Object.freeze({
  [CARD_NUMBER]: Array(DIGITS[CARD_NUMBER]).fill(''),
  [EXPIRY_DATE]: Array(DIGITS[EXPIRY_DATE]).fill(''),
  [OWNER]: '',
  [CVC]: '',
  [PASSWORD]: Array(DIGITS[PASSWORD]).fill(''),
  [COMPANY]: '',
  [NICKNAME]: '',
  [BG_COLOR]: '',
});

export const FIELD_ORDERS = Object.keys(INIT_CARD_STATE);

export const INPUT_INFO = {
  [CARD_NUMBER]: {
    require: true,
    valueLength: INPUT_LENGTH[CARD_NUMBER],
    pattern: '^[0-9]+$',
  },
  [EXPIRY_DATE]: {
    require: true,
    valueLength: INPUT_LENGTH[EXPIRY_DATE],
    pattern: ['^(0[1-9]|1[012])$', '^[0-9]+$'],
  },
  [OWNER]: {
    require: false,
    valueLength: INPUT_LENGTH[OWNER],
    pattern: '',
  },
  [CVC]: {
    require: true,
    valueLength: INPUT_LENGTH[CVC],
    pattern: '^[0-9]+$',
  },
  [PASSWORD]: {
    require: true,
    valueLength: INPUT_LENGTH[PASSWORD],
    pattern: '^[0-9]+$',
  },
  [NICKNAME]: {
    require: false,
    valueLength: INPUT_LENGTH[NICKNAME],
    pattern: '',
  },
};

export const ERROR_MESSAGES = {
  [CARD_NUMBER]: {
    invalidLength: '',
    invalidValue: '유효한 값이 아닙니다.',
  },
  [EXPIRY_DATE]: {
    invalidLength: '',
    invalidValue: ['', ''],
  },
  [CVC]: {
    invalidLength: '',
    invalidValue: '',
  },
  [PASSWORD]: {
    invalidLength: '',
    invalidValue: '',
  },
};
