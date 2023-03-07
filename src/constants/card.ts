import { CardCompanyCodeType, CARD_COMPNAYS_CODE } from './cardCompanyCode'

export interface CardExpireDateType {
  year: string
  month: string
}

export interface CardNumbersType {
  firstNumber: string
  secondNumber: string
  thridNumber: string
  fourthNumber: string
}

export interface CardPasswordType {
  firstPssword: string
  secondPassword: string
}
export interface PaymentCard {
  id: string
  cardNumbers: CardNumbersType
  cardExpireDate: CardExpireDateType
  cardOwner: string
  cardPinCode: string
  cardPassword: CardPasswordType
  cardCompanyCode: CardCompanyCodeType
  cardNickname: string
}

export type AddPaymentCard = Omit<PaymentCard, 'id'>
export type AddPaymentCardKeys = keyof AddPaymentCard

export const PAYMENT_CARD_FORM_KEYS = {
  ID: 'id',
  CARD_NUMBERS: 'cardNumbers',
  CARD_EXPIRE_DATE: 'cardExpireDate',
  CARD_OWNER: 'cardOwner',
  CARD_PINCODE: 'cardPinCode',
  CARD_PASSWORD: 'cardPassword',
  CARD_COMPANY_CODE: 'cardCompanyCode',
  CARD_NICKNAME: 'cardNickname',
} as const

export const INITAL_CARD_STATE: AddPaymentCard = {
  [PAYMENT_CARD_FORM_KEYS.CARD_NUMBERS]: {
    firstNumber: '',
    secondNumber: '',
    thridNumber: '',
    fourthNumber: '',
  },
  [PAYMENT_CARD_FORM_KEYS.CARD_EXPIRE_DATE]: {
    month: '',
    year: '',
  },
  [PAYMENT_CARD_FORM_KEYS.CARD_OWNER]: '',
  [PAYMENT_CARD_FORM_KEYS.CARD_PINCODE]: '',
  [PAYMENT_CARD_FORM_KEYS.CARD_PASSWORD]: {
    firstPssword: '',
    secondPassword: '',
  },
  [PAYMENT_CARD_FORM_KEYS.CARD_COMPANY_CODE]: CARD_COMPNAYS_CODE.NULL,
  [PAYMENT_CARD_FORM_KEYS.CARD_NICKNAME]: '',
}
