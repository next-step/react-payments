import React, { useContext, useState } from 'react'
import * as S from './style'
import { Card } from './type'
import ErrorBoundary from 'controlled/components/ErrorBoundary'

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

export default function App({ children }: Props) {
  const [cards, setCards] = useState<Card[]>([])
  const [editCardIndex, setEditCardIndex] = useState(0)
  return (
    <ErrorBoundary>
      <S.Root>
        <S.App>
          <AppContext.Provider value={{ cards, editCardIndex, setEditCardIndex, setCards }}>
            {children}
          </AppContext.Provider>
        </S.App>
      </S.Root>
    </ErrorBoundary>
  )
}

export const useAppContext = () => {
  const appContext = useContext(AppContext)
  if (!appContext) throw new Error('Cannot find ContextProvier')
  return appContext
}
