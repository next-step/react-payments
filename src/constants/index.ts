import { initCardState } from '@components/Card/type';

export const CARD_ID = 'id';
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
  [k in keyof Omit<
    initCardState,
    typeof COMPANY | typeof BG_COLOR | typeof CARD_ID
  >]: number;
} = {
  [CARD_NUMBER]: 4,
  [EXPIRY_DATE]: 2,
  [OWNER]: 30,
  [PASSWORD]: 1,
  [CVC]: 3,
  [NICKNAME]: 10,
};

export const INIT_CARD_STATE: initCardState = Object.freeze({
  [CARD_ID]: 0,
  [CARD_NUMBER]: Array(DIGITS[CARD_NUMBER]).fill(''),
  [EXPIRY_DATE]: Array(DIGITS[EXPIRY_DATE]).fill(''),
  [OWNER]: '',
  [CVC]: '',
  [PASSWORD]: Array(DIGITS[PASSWORD]).fill(''),
  [COMPANY]: '',
  [NICKNAME]: '',
  [BG_COLOR]: '',
});

export const INPUT_INFO = {
  [CARD_NUMBER]: {
    require: true,
    valueLength: INPUT_LENGTH[CARD_NUMBER],
    pattern: '^[0-9]+$',
    errorMessage: {
      invalidLength: '숫자 4자리를 입력해 주세요.',
      invalidValue: '유효한 값이 아닙니다.',
    },
  },
  [EXPIRY_DATE]: {
    require: true,
    valueLength: INPUT_LENGTH[EXPIRY_DATE],
    pattern: ['^(0[1-9]|1[012])$', '^[0-9]+$'],
    errorMessage: {
      invalidLength: '숫자 2자리를 입력해 주세요.',
      invalidValue: [
        '월은 1이상 12이하 숫자만 입력 가능합니다.',
        '유효한 값이 아닙니다.',
      ],
    },
  },
  [OWNER]: {
    require: false,
    valueLength: INPUT_LENGTH[OWNER],
    pattern: '', //^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]+$
    errorMessage: null,
  },
  [CVC]: {
    require: true,
    valueLength: INPUT_LENGTH[CVC],
    pattern: '^[0-9]+$',
    errorMessage: {
      invalidLength: '숫자 3자리를 입력해 주세요.',
      invalidValue: '유효한 값이 아닙니다.',
    },
  },
  [PASSWORD]: {
    require: true,
    valueLength: INPUT_LENGTH[PASSWORD],
    pattern: '^[0-9]+$',
    errorMessage: {
      invalidLength: '숫자로 입력해 주세요.',
      invalidValue: '유효한 값이 아닙니다.',
    },
  },
  [NICKNAME]: {
    require: false,
    valueLength: INPUT_LENGTH[NICKNAME],
    pattern: '',
    errorMessage: null,
  },
};

export const FIELD_ORDERS = Object.keys(INPUT_INFO);
