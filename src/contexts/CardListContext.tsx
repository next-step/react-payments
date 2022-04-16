import { createContext, ReactNode, useCallback, useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Card } from '$types/card'

import CardListMock from './CardListMock'

const initialCardsState: Card[] = CardListMock

const CardListContext = createContext<{
  cards: Card[]
  addCard: (card: Card) => Card
  getCard: (id: string) => Card | undefined
  deleteCard: (id: string) => void
} | null>(null)

export const useCardList = () => {
  const context = useContext(CardListContext)

  if (!context) {
    throw new Error()
  }

  return context
}

const CardListContextProvider = ({ children }: { children: ReactNode }) => {
  const [cards, setCards] = useState<Card[]>(initialCardsState)

  const addCard = useCallback((card: Card) => {
    const newCard = { ...card, id: uuidv4() }
    setCards((preCards) => [newCard, ...preCards])
    return newCard
  }, [])

  const getCard = useCallback(
    (id: string) => {
      return cards.find((card) => card.id === id)
    },
    [cards],
  )

  const deleteCard = useCallback(
    (id: string) => {
      const targetCardIndex = cards.findIndex((card) => card.id === id)
      const tempCards = [...cards]
      tempCards.splice(targetCardIndex, 1)
      setCards(tempCards)
    },
    [cards],
  )

  return <CardListContext.Provider value={{ cards, addCard, getCard, deleteCard }}>{children}</CardListContext.Provider>
}

export default CardListContextProvider
