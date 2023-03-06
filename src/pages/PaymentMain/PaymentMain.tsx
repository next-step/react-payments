import React from 'react'
import { Header } from 'components/molecules/Header'
import { PaymentCard } from 'models/card.model'
import { CardList } from 'components/molecules/CardList'
import { FlexMainTemplate } from 'templates/FlexMainTemplate'

type PaymentMainProps = {
  onClick: (card?: PaymentCard) => void
  cards: PaymentCard[]
}

const PaymentMain: React.FC<PaymentMainProps> = ({ onClick, cards }) => {
  return (
    <>
      <Header title='보유 카드' />
      <FlexMainTemplate>
        <CardList cards={cards} onClick={onClick} isIncludeAddCardView />
      </FlexMainTemplate>
    </>
  )
}

export default PaymentMain
