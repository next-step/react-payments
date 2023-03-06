import { CARD_INFO } from './../constants/card'
import { CARD_COMPNAYS_CODE } from 'constants/card'

export type CardCompanyCodeType =
  (typeof CARD_COMPNAYS_CODE)[keyof typeof CARD_COMPNAYS_CODE]
export interface CardType {
  id?: string
  cardNumber: string
  expireDate: string
  cardOwner: string
  pinCode: string
  password: string
  cardCompanyCode: CardCompanyCodeType
  cardNickname: string
}

export type CardTypeKeys = (typeof CARD_INFO)[keyof typeof CARD_INFO]

export type OnChangeEventParams = {
  name: CardTypeKeys
  formatter?: (str: string) => string
}

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

export type ConvertValueToBoolean<T> = {
  [K in keyof T]: T[K] extends object ? ConvertValueToBoolean<T[K]> : boolean
}

export type CardNumbersValidate = ConvertValueToBoolean<CardNumbersType>

export type PaymentCardValidate = ConvertValueToBoolean<AddPaymentCard>
