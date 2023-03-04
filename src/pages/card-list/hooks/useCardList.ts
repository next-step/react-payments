import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { CardListStateContext, CardListDispatchContext } from '@/contexts/cardList'
import { CardInfomation } from '@/domain'
import { useCardInfo } from '@/pages/hooks'

const useCardList = () => {
  const navigate = useNavigate()

  const cardList = useContext(CardListStateContext)
  const cardListDispatch = useContext(CardListDispatchContext)

  const { setAllCardInfo } = useCardInfo()

  const onClickCard = (card: CardInfomation) => {
    setAllCardInfo(card)
    navigate('/card-update')
  }

  const addCard = (newCard: CardInfomation) => {
    cardListDispatch({ type: 'ADD', payload: newCard })
  }

  const updateCard = (updatedCard: CardInfomation) => {
    cardListDispatch({ type: 'UPDATE', payload: updatedCard })
  }

  const deleteCard = (deletedCard: CardInfomation) => {
    cardListDispatch({ type: 'DELETE', payload: deletedCard })
  }
  return { cardList, addCard, deleteCard, updateCard, onClickCard }
}

export default useCardList
