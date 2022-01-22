import { createContext, Dispatch, ReactNode, useReducer } from 'react'
import { CardProp } from '../../components/Card'

export type LocalCardProps = Omit<CardProp, 'setModalIsOpen'>
type CardStoredType = { id: string; card: LocalCardProps }
type CardContextProps = CardStoredType[]
type Payload = CardStoredType
type Action = { type: 'ADD'; payload: Payload }
type CardDispatcher = Dispatch<Action>

export const cardContext = createContext<CardContextProps | undefined>(
  undefined
)
export const cardDispatcherContext = createContext<CardDispatcher | undefined>(
  undefined
)

function cardReducer(
  state: CardContextProps,
  action: Action
): CardContextProps {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload]
  }
}

export default function CardContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const [state, dispatch] = useReducer(cardReducer, [])

  return (
    <cardDispatcherContext.Provider value={dispatch}>
      <cardContext.Provider value={state}>{children}</cardContext.Provider>
    </cardDispatcherContext.Provider>
  )
}
