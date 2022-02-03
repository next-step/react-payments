import React, { useContext, useState } from 'react'
import { Card } from 'type'
interface Props {
  children: React.ReactNode
}

interface Context {
  cards: Card[]
  editCardIndex: number
  setEditCardIndex: React.Dispatch<React.SetStateAction<number>>
  setCards: React.Dispatch<React.SetStateAction<Card[]>>
}

const AppContext = React.createContext<Context | null>(null)

export const useAppContext = () => {
  const appContext = useContext(AppContext)
  if (!appContext) throw new Error('Cannot find AppProvider')
  return appContext
}

export default function AppProvider({ children }: Props) {
  const [cards, setCards] = useState<Card[]>([])
  const [editCardIndex, setEditCardIndex] = useState(0)

  return (
    <AppContext.Provider value={{ cards, editCardIndex, setEditCardIndex, setCards }}>
      {children}
    </AppContext.Provider>
  )
}
