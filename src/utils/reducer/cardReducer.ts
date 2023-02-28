import { CardInfomation, CardAction } from '@/domain'

const cardReducer = (state: CardInfomation, action: CardAction): CardInfomation => {
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

export default cardReducer
