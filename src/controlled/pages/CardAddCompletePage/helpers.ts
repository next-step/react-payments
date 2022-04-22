import { Card } from '../../type'

export const updateCardNickName = (cards: Card[], nickName: string): Card[] => {
  const lastCard = cards[cards.length - 1]
  const { serialNums } = lastCard
  return cards.map((card, i) => {
    if (cards.length - 1 === i && nickName === '')
      return { ...lastCard, serialNums: { ...serialNums }, nickName: lastCard.type }
    if (cards.length - 1 === i && nickName !== '')
      return { ...lastCard, serialNums: { ...serialNums }, nickName }
    return card
  })
}
