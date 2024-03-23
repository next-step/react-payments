import { initialState } from './PaymentProvider'
import { PaymentDispatch } from './actions'
import { PaymentState } from './types'

export const paymentReducer = (
  state: PaymentState,
  { type, payload }: PaymentDispatch
) => {
  switch (type) {
    case 'SET_CARD_LIST': {
      const { cardList } = payload

      return {
        ...state,
        cardList
      }
    }
    case 'SET_CARD_DETAIL': {
      const { card } = payload

      return {
        ...state,
        card: {
          ...state.card,
          ...card
        }
      }
    }
    case 'RESET_CARD_DETAIL': {
      return {
        ...state,
        card: initialState.card
      }
    }
    default:
      throw new Error(`Unhandled action type: ${type}`)
  }
}
