import React, { useState } from 'react'

import useCards from 'hooks/use-cards'
import { AddEditCraditCard } from 'pages/AddEditCraditCard'
import { PaymentMain } from 'pages/PaymentMain'
import { Loading } from 'components/atoms/Loading'
import { ErrorIcon } from 'components/atoms/ErrorIcon'

const PaymentPage = () => {
  const [isAddCard, setIsAddCard] = useState(false)
  const { loading, error, cards, addCard } = useCards()

  const toggleIsAddCard = (isAdd: boolean) => {
    setIsAddCard(isAdd)
  }

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <ErrorIcon message={error.message} />
  }

  return (
    <>
      {isAddCard ? (
        <AddEditCraditCard
          onNavigate={() => toggleIsAddCard(false)}
          addCard={addCard}
        />
      ) : (
        <PaymentMain
          onClickAddCard={() => toggleIsAddCard(true)}
          cards={cards}
        />
      )}
    </>
  )
}

export default PaymentPage
