import { createContext } from 'react'

import { INITIAL_CARD_LIST_STATE } from '@/contants'
import { CardInfomation, CardListAction } from '@/domain'

type CardListDispatchContext = (action: CardListAction) => void

export const CardListStateContext = createContext<CardInfomation[]>(INITIAL_CARD_LIST_STATE)
export const CardListDispatchContext = createContext<CardListDispatchContext>(() => {
  throw new Error('Cannot find CardListProvider')
})
