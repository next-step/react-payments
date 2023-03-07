import React from 'react'
import { Header } from 'components/ui/Header'
import { AddPaymentCard, PaymentCard } from 'constants/card'
import { CardList } from 'components/CardList'
import { FlexMainTemplate } from 'templates/FlexMainTemplate'

type PaymentMainProps = {
  onClick: (card: PaymentCard | AddPaymentCard) => void
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
