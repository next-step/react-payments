import { CardState } from '@/types/card'

const CARD_STATE_LOCALSTORAGE_KEY = 'CARD_STATE'

export const loadCardListFromLocalStorage = () => {
  const itemFromStorage = localStorage.getItem(CARD_STATE_LOCALSTORAGE_KEY)
  if (!itemFromStorage) return []

  return (JSON.parse(itemFromStorage) as CardState[]).map(({ updatedAt, ...rest }) => ({
    ...rest,
    updatedAt: new Date(updatedAt),
  }))
}

export const updateCardListOfLocalStorage = (cardList: CardState[]) => {
  localStorage.setItem(CARD_STATE_LOCALSTORAGE_KEY, JSON.stringify(cardList))
}
