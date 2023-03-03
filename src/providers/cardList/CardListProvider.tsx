import { useReducer, PropsWithChildren } from 'react'

import { INITIAL_CARD_LIST_STATE } from '@/contants'
import { CardListStateContext, CardListDispatchContext } from '@/contexts/cardList/CardListContext'
import { cardListReducer } from '@/utils'

function CardProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(cardListReducer, INITIAL_CARD_LIST_STATE)
  return (
    <CardListStateContext.Provider value={state}>
      <CardListDispatchContext.Provider value={dispatch}>{children}</CardListDispatchContext.Provider>
    </CardListStateContext.Provider>
  )
}

export default CardProvider
