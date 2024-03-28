import { CARD_TYPE } from '@/constants/card-type'

export const getCardTypeFromCardCode = (cardCode: string) => {
  const cardCodeValue = Number(cardCode)
  const cardTypeKeys = Object.keys(CARD_TYPE)
  return CARD_TYPE[cardTypeKeys[cardCodeValue % cardTypeKeys.length]]
}
