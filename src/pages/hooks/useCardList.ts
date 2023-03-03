import { useContext } from 'react'

import { CardListStateContext, CardListDispatchContext } from '@/contexts/cardList'
import { CardInfomation } from '@/domain'

const useCardList = () => {
  const cardList = useContext(CardListStateContext)
  const cardListDispatch = useContext(CardListDispatchContext)

  const addCard = (newCard: CardInfomation) => {
    cardListDispatch({ type: 'ADD', payload: newCard })
  }

  const updateCard = (updatedCard: CardInfomation) => {
    cardListDispatch({ type: 'UPDATE', payload: updatedCard })
  }

  const deleteCard = (deletedCard: CardInfomation) => {
    cardListDispatch({ type: 'DELETE', payload: deletedCard })
  }
  return { cardList, addCard, deleteCard, updateCard }
}

export default useCardList
