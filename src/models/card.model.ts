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
