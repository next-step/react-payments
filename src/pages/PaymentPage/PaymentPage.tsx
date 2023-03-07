import React, { useState, useReducer } from 'react'

import { AddEditCraditCard } from 'pages/AddEditCraditCard'
import { PaymentMain } from 'pages/PaymentMain'
import { PaymentCard, AddPaymentCard } from 'constants/card'
import { DUMMY_PAYMENT_CARDS } from 'constants/staticCardList'
import { CardReducer } from 'reducers/CardReducer'

const PaymentPage = () => {
  const [selectCard, setSelectCard] = useState<
    AddPaymentCard | PaymentCard | null
  >(null)
  const [cards, dispatch] = useReducer(CardReducer, DUMMY_PAYMENT_CARDS)

  const onClickCard = (card: AddPaymentCard | PaymentCard) => {
    setSelectCard(card)
  }

  const resetSelectCard = () => {
    setSelectCard(null)
  }

  return (
    <>
      {selectCard ? (
        <AddEditCraditCard
          onNavigateNext={resetSelectCard}
          selectCard={selectCard}
        />
      ) : (
        <PaymentMain onClick={onClickCard} cards={cards} />
      )}
    </>
  )
}

export default PaymentPage
