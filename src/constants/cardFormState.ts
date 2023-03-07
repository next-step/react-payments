import { AddPaymentCard, PAYMENT_CARD_FORM_KEYS } from './card'
import { CARD_COMPNAYS_CODE } from './cardCompanyCode'

type ValidationType = {
  value: string
  error: boolean | string
}

type ConvertValidationType<T> = {
  [K in keyof T]: T[K] extends object
    ? ConvertValidationType<T[K]>
    : ValidationType
}

export type CardFormValidationType = ConvertValidationType<AddPaymentCard>

export const INITAL_CARD_FORM_STATE: CardFormValidationType = {
  [PAYMENT_CARD_FORM_KEYS.CARD_NUMBERS]: {
    firstNumber: {
      value: '',
      error: false,
    },
    secondNumber: {
      value: '',
      error: false,
    },
    thridNumber: {
      value: '',
      error: false,
    },
    fourthNumber: {
      value: '',
      error: false,
    },
  },
  [PAYMENT_CARD_FORM_KEYS.CARD_EXPIRE_DATE]: {
    month: {
      value: '',
      error: false,
    },
    year: {
      value: '',
      error: false,
    },
  },
  [PAYMENT_CARD_FORM_KEYS.CARD_OWNER]: {
    value: '',
    error: false,
  },
  [PAYMENT_CARD_FORM_KEYS.CARD_PASSWORD]: {
    firstPssword: {
      value: '',
      error: false,
    },
    secondPassword: {
      value: '',
      error: false,
    },
  },
  [PAYMENT_CARD_FORM_KEYS.CARD_PINCODE]: {
    value: '',
    error: false,
  },
  [PAYMENT_CARD_FORM_KEYS.CARD_NICKNAME]: {
    value: '',
    error: false,
  },
  [PAYMENT_CARD_FORM_KEYS.CARD_COMPANY_CODE]: {
    value: CARD_COMPNAYS_CODE.NULL,
    error: false,
  },
}
