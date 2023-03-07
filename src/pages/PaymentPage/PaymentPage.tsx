import React, { useState, useReducer } from 'react'

import { AddEditCraditCard } from 'pages/AddEditCraditCard'
import { PaymentMain } from 'pages/PaymentMain'
import {
  PaymentCard,
  AddPaymentCard,
  AddOrUpdateCardType,
} from 'constants/card'
import { DUMMY_PAYMENT_CARDS } from 'constants/staticCardList'
import { CardReducer, CARD_REDUCER_ACTION_TYPE } from 'reducers/CardReducer'

const PaymentPage: React.FC = () => {
  const [selectCard, setSelectCard] = useState<
    AddPaymentCard | PaymentCard | null
  >(null)

  const [cards, dispatch] = useReducer(CardReducer, DUMMY_PAYMENT_CARDS)

  const onClickCard = (card: AddOrUpdateCardType) => {
    setSelectCard(card)
  }

  const resetSelectCard = () => {
    setSelectCard(null)
  }

  const addOrUpdateCraditCard = (card: AddOrUpdateCardType) => {
    if ('id' in card) {
      return dispatch({
        type: CARD_REDUCER_ACTION_TYPE.UPDATE,
        payload: card,
      })
    }

    return dispatch({
      type: CARD_REDUCER_ACTION_TYPE.ADD,
      payload: card,
    })
  }

  return (
    <>
      {selectCard ? (
        <AddEditCraditCard
          onNavigateNext={resetSelectCard}
          selectCard={selectCard}
          submitCard={addOrUpdateCraditCard}
        />
      ) : (
        <PaymentMain onClick={onClickCard} cards={cards} />
      )}
    </>
  )
}

export default PaymentPage
