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

// backend(string) ->
// front(cardNumber, array) ->
// backend ->

export type CardExpireDate = {
  year: string
  month: string
}
export interface PaymentCard {
  id: string
  cardNumbers: string[]
  cardExpireDate: CardExpireDate
  cardOwner: string
  cardPinCode: string
  cardPassword: string
  cardCompanyCode: CardCompanyCodeType
  cardNickname: string
}

export type AddPaymentCard = Omit<PaymentCard, 'id'>
export type AddPaymentCardKeys = keyof AddPaymentCard
