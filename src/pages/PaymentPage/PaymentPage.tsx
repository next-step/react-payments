import React, { useState, useReducer } from 'react'

import { AddEditCraditCard } from 'pages/AddEditCraditCard'
import { PaymentMain } from 'pages/PaymentMain'
import { AddOrUpdateCardType } from 'constants/card'
import { DUMMY_PAYMENT_CARDS } from 'constants/staticCardList'
import { CardReducer, CARD_REDUCER_ACTION_TYPE } from 'reducers/CardReducer'

const PaymentPage: React.FC = () => {
  const [selectCard, setSelectCard] = useState<AddOrUpdateCardType | null>(null)
  const [cards, dispatch] = useReducer(CardReducer, DUMMY_PAYMENT_CARDS)

  const onEditStart = (card: AddOrUpdateCardType) => {
    setSelectCard(card)
  }

  const onEditEnd = () => {
    setSelectCard(null)
  }

  const onUpdateCardList = (card: AddOrUpdateCardType) => {
    if ('id' in card) {
      dispatch({
        type: CARD_REDUCER_ACTION_TYPE.UPDATE,
        payload: card,
      })
      return onEditEnd()
    }

    dispatch({
      type: CARD_REDUCER_ACTION_TYPE.ADD,
      payload: card,
    })
    return onEditEnd()
  }

  return (
    <>
      {selectCard ? (
        <AddEditCraditCard
          onNavigateGoBack={onEditEnd}
          selectCard={selectCard}
          submitCard={onUpdateCardList}
        />
      ) : (
        <PaymentMain onClick={onEditStart} cards={cards} />
      )}
    </>
  )
}

export default PaymentPage
