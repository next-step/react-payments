import { INITIAL_CARD_STATE } from '@/contants'
import { CardInfomation, CardAction } from '@/domain'

const cardReducer = (state: CardInfomation, action: CardAction): CardInfomation => {
  switch (action.type) {
    case 'SET_CARD_NUMBERS':
      return {
        ...state,
        cardNumbers: {
          ...state.cardNumbers,
          ...action.payload,
        },
      }
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload,
      }
    case 'SET_NICKNAME':
      return {
        ...state,
        nickname: action.payload,
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
    case 'SET_ALL':
      return action.payload
    case 'RESET_ALL':
      return INITIAL_CARD_STATE
    default:
      throw new Error(`Unhandled action type: ${action}`)
  }
}

export default cardReducer
