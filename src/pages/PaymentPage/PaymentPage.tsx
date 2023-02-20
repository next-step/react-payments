import React, { useState } from 'react'

import useCards from 'hooks/use-cards'
import { AddCardPage } from 'pages/AddCardPage/AddCardPage'
import { CardListPage } from 'pages/CardListPage/CardListPage'
import { Loading } from 'components/ui/Loading'
import { Error } from 'components/ui/Error'

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
    return <Error message={error.message} />
  }

  return (
    <>
      {isAddCard ? (
        <AddCardPage
          onNavigate={() => toggleIsAddCard(false)}
          addCard={addCard}
        />
      ) : (
        <CardListPage
          onClickAddCard={() => toggleIsAddCard(true)}
          cards={cards}
        />
      )}
    </>
  )
}

export default PaymentPage
