import { useReducer, PropsWithChildren } from 'react'

import { initialCard, CardStateContext, CardDispatchContext, CardAction } from '@/contexts/card'
import { CardInfomation } from '@/domain'

function cardReducer(state: CardInfomation, action: CardAction): CardInfomation {
  switch (action.type) {
    case 'SET_CARD_NUMBERS':
      return {
        ...state,
        cardNumbers: {
          first: action.payload.first,
          second: action.payload.second,
          third: action.payload.third,
          fourth: action.payload.fourth,
        },
      }
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload,
      }
    case 'SET_EXPIRED_YEAR':
      return {
        ...state,
        expiredYear: action.payload,
      }
    case 'SET_EXPIRED_MONTH':
      return {
        ...state,
        expiredMonth: action.payload,
      }
    case 'SET_OWNER':
      return {
        ...state,
        owner: action.payload,
      }
    case 'SET_SECURITY_CODE':
      return {
        ...state,
        securityCode: action.payload,
      }
    case 'SET_PASSWORD':
      return {
        ...state,
        password: {
          first: action.payload.first,
          second: action.payload.second,
        },
      }
    default:
      throw new Error(`Unhandled action type: ${action}`)
  }
}

function CardProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(cardReducer, initialCard)
  return (
    <CardStateContext.Provider value={state}>
      <CardDispatchContext.Provider value={dispatch}>{children}</CardDispatchContext.Provider>
    </CardStateContext.Provider>
  )
}

export default CardProvider
