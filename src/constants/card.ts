export const MAX_LENGTH = {
  CARD_NUMBER: 4,
  EXPIRED_DATE: 2,
  CARD_OWNER: 30,
  SECRET_CODE: 3,
  PASSWORD: 1,
  ALIAS: 10,
} as const;

export const MIN_LENGTH = {
  CARD_NUMBER: 4,
  EXPIRED_DATE: 2,
  SECRET_CODE: 3,
};

export const INPUT_NAME = {
  MONTH: 'month',
  YEAR: 'year',
  NUM1: 'num1',
  NUM2: 'num2',
  NUM3: 'num3',
  NUM4: 'num4',
  OWNER: 'owner',
  PASSWORD1: 'password1',
  PASSWORD2: 'password2',
  SECRET_CODE: 'secretCode',
} as const;
