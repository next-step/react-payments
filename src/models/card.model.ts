import { CARD_COMPNAYS_CODE } from 'constants/card'

export type CardCompanyCodeType = (typeof CARD_COMPNAYS_CODE)[keyof typeof CARD_COMPNAYS_CODE]
export interface CardType {
  id: number
  cardNumber: string
  expireDate: string
  cardOwner: string
  pinCode: string
  password: string
  cardCompanyCode: CardCompanyCodeType
  cardNickname: string
}
