import { createContext } from 'react'

import { INITIAL_CARD_STATE } from '@/contants'
import { CardAction } from '@/domain'

type CardDispatchContext = (action: CardAction) => void

export const CardStateContext = createContext(INITIAL_CARD_STATE)
export const CardDispatchContext = createContext<CardDispatchContext>(() => {
  throw new Error('Cannot find CardProvider')
})
