import React from 'react'
import { Header } from 'components/molecules/Header'
import { CardType, CardTypeKeys } from 'models/card.model'
import { CardList } from 'components/molecules/CardList'

type PaymentMainProps = {
  onClick: (card?: CardType) => void
  cards: CardType[]
}

const PaymentMain: React.FC<PaymentMainProps> = ({ onClick, cards }) => {
  return (
    <>
      <Header title='보유 카드' />
      <CardList cards={cards} onClick={onClick} isIncludeAddCardView={true} />
    </>
  )
}

export default PaymentMain
