import { createContext, Dispatch, ReactNode, useReducer } from 'react'
import { CardProp } from '../../components/Card'

export type ServerCardProps = Omit<CardProp, 'setModalIsOpen' | 'size'> & {
  createAt: number
}

export type CardDispatchAddType = { id: string; card: ServerCardProps }
type CardContextProps = Record<string, ServerCardProps>
type AddPayload = CardDispatchAddType
type Action =
  | { type: 'ADD'; payload: AddPayload }
  | { type: 'INIT'; payload: CardContextProps }

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
  const clonedState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case 'INIT':
      return action.payload

    case 'ADD':
      clonedState[action.payload.id] = action.payload.card
      return clonedState
  }
}

export default function CardContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const [state, dispatch] = useReducer(cardReducer, {})

  return (
    <cardDispatcherContext.Provider value={dispatch}>
      <cardContext.Provider value={state}>{children}</cardContext.Provider>
    </cardDispatcherContext.Provider>
  )
}
