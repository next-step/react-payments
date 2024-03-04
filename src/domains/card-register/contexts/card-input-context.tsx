import { PropsWithChildren, createContext, useContext } from 'react'
import { useCardInputState } from '@/domains/card-register/hooks/use-card-input-state'

export interface CardInputContextValue {
  cardInput: ReturnType<typeof useCardInputState>[0]
  setCardInput: ReturnType<typeof useCardInputState>[1]
}

export const CardInputContext = createContext<CardInputContextValue | null>(null)

export const CardInputContextProvider = ({ children }: PropsWithChildren) => {
  const [cardInput, setCardInput] = useCardInputState()

  return (
    <CardInputContext.Provider value={{ cardInput, setCardInput }}>
      {children}
    </CardInputContext.Provider>
  )
}

export const useCardInputContext = () => {
  const context = useContext(CardInputContext)
  if (!context) throw new Error('useInputContext should be in CarDInputContextProvider')
  return context
}
