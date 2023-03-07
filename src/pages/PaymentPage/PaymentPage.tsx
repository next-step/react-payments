import React, { useState, useReducer } from 'react'

import { AddEditCraditCard } from 'pages/AddEditCraditCard'
import { PaymentMain } from 'pages/PaymentMain'
import { PaymentCard, INITAL_CARD_STATE } from 'constants/card'
import { DUMMY_PAYMENT_CARDS } from 'constants/staticCardList'
import { CardReducer } from 'reducers/CardReducer'

const PaymentPage = () => {
  const [isAddEditCard, setIsAddEditCard] = useState(false)
  // selected card -> context로 만들기
  // modal -> context로 만들기
  const [selectCard, setSelectCard] = useState(INITAL_CARD_STATE)
  const [cards, dispatch] = useReducer(CardReducer, DUMMY_PAYMENT_CARDS)

  const editStart = () => setIsAddEditCard(true)
  const editEnd = () => setIsAddEditCard(false)

  const onAddEditCard = (card?: PaymentCard) => {
    setSelectCard(card ?? INITAL_CARD_STATE)
    editStart()
  }

  return (
    <>
      {isAddEditCard ? (
        <AddEditCraditCard
          onNavigateNext={editEnd}
          initCardValue={selectCard}
        />
      ) : (
        <PaymentMain onClick={onAddEditCard} cards={cards} />
      )}
    </>
  )
}

export default PaymentPage
