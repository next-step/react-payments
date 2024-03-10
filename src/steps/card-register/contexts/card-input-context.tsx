import { PropsWithChildren, createContext, useContext } from 'react'
import { useCardInputState } from '@/steps/card-register/hooks/use-card-input-state'

export interface CardInputContextValue {
  cardInput: ReturnType<typeof useCardInputState>['cardInput']
  setCardInput: ReturnType<typeof useCardInputState>['setCardInput']
  resetCardInput: ReturnType<typeof useCardInputState>['resetCardInput']
}

export const CardInputContext = createContext<CardInputContextValue | null>(null)

export const CardInputContextProvider = ({ children }: PropsWithChildren) => {
  const { cardInput, setCardInput, resetCardInput } = useCardInputState()

  return (
    <CardInputContext.Provider value={{ cardInput, setCardInput, resetCardInput }}>
      {children}
    </CardInputContext.Provider>
  )
}

export const useCardInputContext = () => {
  const context = useContext(CardInputContext)
  if (!context) throw new Error('useInputContext should be in CarDInputContextProvider')
  return context
}
