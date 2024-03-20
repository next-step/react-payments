import { LOCAL_STORAGE_KEY_LIST } from './payments.const'
import { CardItem } from './payments.type'

export const usePaymentCardList = () => {
  const cardList = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY_LIST.CARD_INFO) || '[]')

  if (!Array.isArray(cardList)) {
    throw new Error('cardList must be an array')
  }

  const getCardList = (option: { sortType: 'asc' | 'desc' }) => {
    if (option.sortType === 'asc') {
      cardList.sort((a, b) => (a.time > b.time ? 1 : -1))
    } else {
      cardList.sort((a, b) => (a.time > b.time ? -1 : 1))
    }

    return cardList as Array<CardItem>
  }

  return {
    getCardList,
  }
}
