import React, { useState } from 'react'

import { AddEditCraditCard } from 'pages/AddEditCraditCard'
import { PaymentMain } from 'pages/PaymentMain'
import { Loading } from 'components/atoms/Loading'
import { ErrorIcon } from 'components/atoms/ErrorIcon'
import useCards from 'hooks/useCards'
import { CardType } from 'models/card.model'
import { INIT_CARD_VALUE } from 'constants/card'

const PaymentPage = () => {
  const [isAddEditCard, setIsAddEditCard] = useState(false)
  const { loading, error, cards, addCard } = useCards()
  const [selectCard, setSelectCard] = useState(INIT_CARD_VALUE)

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <ErrorIcon message={error.message} />
  }

  const editStart = () => setIsAddEditCard(true)
  const editEnd = () => setIsAddEditCard(false)

  const onAddEditCard = (card?: CardType) => {
    setSelectCard(card ?? INIT_CARD_VALUE)
    editStart()
  }

  return (
    <>
      {isAddEditCard ? (
        <AddEditCraditCard
          onNavigate={editEnd}
          addCard={addCard}
          initCardValue={selectCard}
        />
      ) : (
        <PaymentMain onClick={onAddEditCard} cards={cards} />
      )}
    </>
  )
}

export default PaymentPage
