/* eslint-disable consistent-return */
import { useReducer, createContext, Dispatch, ReactNode, useContext, useState, SetStateAction } from 'react'

export interface State {
  nickName: string
  cardDesign: string
  cardNumber: { num1: string; num2: string; num3: string; num4: string }
  cardExpirationDate: { MM: string; YY: string }
  ownerName: string
  cardSecurityCode: string
  cardPassword: { password1: string; password2: string }
}

type Action =
  | {
      type: 'CREATE'
      card: State
    }
  | {
      type: 'EDIT'
      card: State
    }
  | {
      type: 'REMOVE'
      card: State
    }

const INIT_CARD = {
  nickName: '',
  cardDesign: '',
  cardNumber: { num1: '', num2: '', num3: '', num4: '' },
  cardExpirationDate: { MM: '', YY: '' },
  ownerName: '',
  cardSecurityCode: '',
  cardPassword: { password1: '', password2: '' },
}

const cardReducer = (state: State[], action: Action) => {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.card)
    case 'EDIT':
      return state.map((card: State) =>
        card.ownerName === action.card.ownerName ? { ...card, nickName: action.card.nickName } : card
      )
    case 'REMOVE':
      return state.filter((card: State) => card.ownerName !== action.card.ownerName)
  }
}

const CardListStateContext = createContext<State[]>([])
const CardDispatchContext = createContext<Dispatch<Action>>(() => null)
const CardItemStateContext = createContext<State>(INIT_CARD)
const CardItemSetContext = createContext<Dispatch<SetStateAction<State>>>(() => null)

export const useCardListStateContext = () => {
  const state = useContext(CardListStateContext)
  return state
}

export const useCardDispatchContext = () => {
  const dispatch = useContext(CardDispatchContext)
  return dispatch
}

export const useCardItemStateContext = () => {
  const itemState = useContext(CardItemStateContext)
  return itemState
}

export const useCardItemSetContext = () => {
  const setState = useContext(CardItemSetContext)
  return setState
}

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cardReducer, [])
  const [cardItem, setCardItem] = useState(INIT_CARD)
  return (
    <CardListStateContext.Provider value={state}>
      <CardDispatchContext.Provider value={dispatch}>
        <CardItemStateContext.Provider value={cardItem}>
          <CardItemSetContext.Provider value={setCardItem}>{children}</CardItemSetContext.Provider>
        </CardItemStateContext.Provider>
      </CardDispatchContext.Provider>
    </CardListStateContext.Provider>
  )
}
