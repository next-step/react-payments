import { useNavigate } from 'react-router-dom'

import { LOCAL_STORAGE_KEY_LIST } from './payments.const'
import { PaymentsMachineContext } from './payments.machine'
import { CardItem } from './payments.type'

export const usePaymentCardList = () => {
  const navigate = useNavigate()

  const cardList = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY_LIST.CARD_INFO) || '[]')
  const paymentActorRef = PaymentsMachineContext.useActorRef()

  if (!Array.isArray(cardList)) {
    throw new Error('cardList must be an array')
  }

  const getCardList = (option: { sortType: 'asc' | 'desc' }) => {
    const copiedCardList = [...cardList]

    if (option.sortType === 'asc') {
      copiedCardList.sort((a, b) => (a.time > b.time ? 1 : -1))
    } else {
      copiedCardList.sort((a, b) => (a.time > b.time ? -1 : 1))
    }

    return copiedCardList as Array<CardItem>
  }

  const editCard = (item: CardItem) => {
    paymentActorRef.send({ type: 'EDIT_CARD', value: item })
    navigate('/payments/cards/new')
  }

  const createCard = () => {
    paymentActorRef.send({ type: 'RESET' })
    navigate('/payments/cards/new')
  }

  const deleteCard = (id: string) => {
    paymentActorRef.send({ type: 'DELETE_CARD', value: id })
  }

  return {
    getCardList,
    editCard,
    createCard,
    deleteCard,
  }
}
