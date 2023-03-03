import { useContext } from 'react'

import { CardListStateContext, CardListDispatchContext } from '@/contexts/cardList'
import { CardInfomation } from '@/domain'

const useCardList = () => {
  const cardList = useContext(CardListStateContext)
  const cardListDispatch = useContext(CardListDispatchContext)

  const addCard = (newCard: CardInfomation) => {
    cardListDispatch({ payload: newCard })
  }

  const updateCard = () => {
    console.log('Update Card!')
  }

  const deleteCard = () => {
    console.log('Delete Card!')
  }
  return { cardList, addCard, deleteCard, updateCard }
}

export default useCardList
