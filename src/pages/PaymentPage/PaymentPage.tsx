import React, { useState, useReducer } from 'react'

import { AddEditCraditCard } from 'pages/AddEditCraditCard'
import { PaymentMain } from 'pages/PaymentMain'
import { AddPaymentCard, PaymentCard } from 'models/card.model'
import { DUMMY_PAYMENT_CARD, INIT_PAYMENT_CARD_INFO } from 'constants/card'
import { CardReducer } from 'reducers/CardReducer'

const PaymentPage = () => {
  const [isAddEditCard, setIsAddEditCard] = useState(false)
  const [selectCard, setSelectCard] = useState(INIT_PAYMENT_CARD_INFO)
  const [cards, dispatch] = useReducer(CardReducer, DUMMY_PAYMENT_CARD)

  const editStart = () => setIsAddEditCard(true)
  const editEnd = () => setIsAddEditCard(false)

  const onAddEditCard = (card?: PaymentCard) => {
    setSelectCard(card ?? INIT_PAYMENT_CARD_INFO)
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
