import { CardData } from '@/common/constants'
import {
  createContext,
  Dispatch,
  ReactChild,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react'

type CardListContextType = {
  cards: CardData[]
  editingCard: CardData | null
  setCards: Dispatch<SetStateAction<CardData[]>>
  setEditingCard: Dispatch<SetStateAction<CardData | null>>
}

const CardListContext = createContext<CardListContextType>({
  cards: [],
  editingCard: null,
  setCards: () => {},
  setEditingCard: () => {},
})
export const useCardList = () => useContext(CardListContext)

const CardListContextProvider = ({
  initialState,
  children,
}: {
  initialState?: Partial<{
    cards: CardData[]
    editingCard: CardData | null
    setCards: Dispatch<SetStateAction<CardData[]>>
    setEditingCard: Dispatch<SetStateAction<CardData | null>>
  }>
  children: ReactChild
}) => {
  const [cards, setCards] = useState<CardData[]>(initialState?.cards || [])
  const [editingCard, setEditingCard] = useState<CardData | null>(initialState?.editingCard || null)

  const state = useMemo(
    () => ({
      cards,
      editingCard,
      setCards,
      setEditingCard,
    }),
    [editingCard, cards],
  )

  return <CardListContext.Provider value={state}>{children}</CardListContext.Provider>
}

export default CardListContextProvider
