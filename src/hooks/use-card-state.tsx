import { CardInputState } from '@/hooks/use-card-input-state'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export interface CardState extends CardInputState {
  id: string
  updatedAt: Date
}

const CARD_STATE_LOCALSTORAGE_KEY = 'CARD_STATE'

const loadCardListFromLocalStorage = () => {
  const itemFromStorage = localStorage.getItem(CARD_STATE_LOCALSTORAGE_KEY)
  if (!itemFromStorage) return []

  return (JSON.parse(itemFromStorage) as CardState[]).map(({ updatedAt, ...rest }) => ({
    ...rest,
    updatedAt: new Date(updatedAt),
  }))
}

const saveCardListToLocalStorage = (card: CardState[]) => {
  localStorage.setItem(CARD_STATE_LOCALSTORAGE_KEY, JSON.stringify(card))
}
export const useCardState = () => {
  const [cardList, setCardList] = useState<CardState[]>(loadCardListFromLocalStorage)

  const addCard = (newCard: CardInputState) => {
    const resultedCardList = [...cardList, { id: uuidv4(), updatedAt: new Date(), ...newCard }]
    setCardList(resultedCardList)
    saveCardListToLocalStorage(resultedCardList)
  }

  const editCard = (editedCard: CardState) => {
    console.log(editedCard.updatedAt)
    const resultedCardList = cardList.map(card => {
      if (card.id === editedCard.id) {
        return editedCard
      }
      return card
    })
    setCardList(resultedCardList)
    saveCardListToLocalStorage(resultedCardList)
  }

  const removeCard = (targetId: CardState['id']) => {
    const resultedCardList = cardList.filter(({ id }) => id !== targetId)
    setCardList(resultedCardList)
    saveCardListToLocalStorage(resultedCardList)
  }

  return {
    cardList,
    addCard,
    editCard,
    removeCard,
  }
}
