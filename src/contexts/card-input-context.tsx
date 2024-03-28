import { PropsWithChildren, createContext, useContext } from 'react'
import { useCardInputState } from '@/hooks/use-card-input-state'

export interface CardInputContextValue extends ReturnType<typeof useCardInputState> {}

export const CardInputContext = createContext<CardInputContextValue | null>(null)

export const CardInputContextProvider = ({ children }: PropsWithChildren) => {
  const useCardInputStateResult = useCardInputState()

  return (
    <CardInputContext.Provider value={useCardInputStateResult}>
      {children}
    </CardInputContext.Provider>
  )
}

export const useCardInputContext = () => {
  const context = useContext(CardInputContext)
  if (!context) throw new Error('useInputContext should be in CarDInputContextProvider')
  return context
}
