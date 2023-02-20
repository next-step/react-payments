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

export interface UpdateCardParams {
  value: string
  name: keyof CardType
  formatter?: (str: string) => string
  maxLength?: number
  isRequire?: boolean
}
