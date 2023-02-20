import React from 'react'
import { Header } from 'components/molecules/Header'
import { EmptyCard } from 'components/EmptyCard'
import { UI_SIZE } from 'constants/ui.constant'
import { Card } from 'components/atoms/Card'
import { CardType } from 'models/card.model'

type PaymentMainProps = {
  onClickAddCard: () => void
  cards: CardType[]
}

const PaymentMain: React.FC<PaymentMainProps> = ({ onClickAddCard, cards }) => {
  return (
    <>
      <Header title='보유 카드' />
      {cards.map((card) => (
        <Card key={card.id} card={card} size={UI_SIZE.SMALL} />
      ))}
      <EmptyCard onClick={onClickAddCard} />
    </>
  )
}

export default PaymentMain
