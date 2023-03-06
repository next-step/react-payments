import { CARD_COMPNAYS_CODE, PAYMENT_CARD_INFO } from './card'

export const INITAL_CARD_STATE = {
  [PAYMENT_CARD_INFO.CARD_NUMBERS]: {
    firstNumber: {
      value: '',
      error: null,
    },
    secondNumber: {
      value: '',
      error: null,
    },
    thridNumber: {
      value: '',
      error: null,
    },
    fourthNumber: {
      value: '',
      error: null,
    },
  },
  [PAYMENT_CARD_INFO.CARD_EXPIRE_DATE]: {
    month: {
      value: '',
      error: null,
    },
    year: {
      value: '',
      error: null,
    },
  },
  [PAYMENT_CARD_INFO.CARD_OWNER]: {
    value: '',
    error: null,
  },
  [PAYMENT_CARD_INFO.CARD_PASSWORD]: {
    firstPssword: {
      value: '',
      error: null,
    },
    secondPassword: {
      value: '',
      error: null,
    },
  },
  [PAYMENT_CARD_INFO.CARD_PINCODE]: {
    value: '',
    error: null,
  },
  [PAYMENT_CARD_INFO.CARD_NICKNAME]: {
    value: '',
    error: null,
  },
  [PAYMENT_CARD_INFO.CARD_COMPANY_CODE]: {
    value: CARD_COMPNAYS_CODE.NULL,
    error: null,
  },
}
