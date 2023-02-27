import { createContext } from 'react'

import { CardInfomation } from '@/domain'

export const initialCard: CardInfomation = {
  cardNumbers: { first: '', second: '', third: '', fourth: '' },
  name: '',
  expiredYear: '',
  expiredMonth: '',
  owner: '',
  securityCode: '',
  password: { first: '', second: '' },
}

export type CardAction =
  | {
      type: 'SET_CARD_NUMBERS'
      payload: { first: string; second: string; third: string; fourth: string }
    }
  | {
      type: 'SET_NAME'
      payload: string
    }
  | {
      type: 'SET_EXPIRED_YEAR'
      payload: string
    }
  | {
      type: 'SET_EXPIRED_MONTH'
      payload: string
    }
  | {
      type: 'SET_OWNER'
      payload: string
    }
  | {
      type: 'SET_SECURITY_CODE'
      payload: string
    }
  | {
      type: 'SET_PASSWORD'
      payload: { first: string; second: string }
    }

type CardDispatchContextType = (action: CardAction) => void

export const CardStateContext = createContext(initialCard)
export const CardDispatchContext = createContext<CardDispatchContextType>(() => {
  throw new Error('Cannot find CardProvider')
})
