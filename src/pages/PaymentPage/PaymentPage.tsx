import React, { useState } from 'react'

import { AddEditCraditCard } from 'pages/AddEditCraditCard'
import { PaymentMain } from 'pages/PaymentMain'
import { Loading } from 'components/atoms/Loading'
import { ErrorIcon } from 'components/atoms/ErrorIcon'
import useCards from 'hooks/useCards'

const PaymentPage = () => {
  const [isAddEditCard, setIsAddEditCard] = useState(false)
  const { loading, error, cards, addCard } = useCards()

  const toggleIsAddCard = (isAdd: boolean) => {
    setIsAddEditCard(isAdd)
  }

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <ErrorIcon message={error.message} />
  }

  const onAddEditCard = (id?: number) => {
    toggleIsAddCard(true)
  }

  return (
    <>
      {isAddEditCard ? (
        <AddEditCraditCard
          onNavigate={() => toggleIsAddCard(false)}
          addCard={addCard}
        />
      ) : (
        <PaymentMain
          onClick={(id?: number) => onAddEditCard(id)}
          cards={cards}
        />
      )}
    </>
  )
}

export default PaymentPage
