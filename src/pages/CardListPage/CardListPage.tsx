import React from 'react'
import { Header } from 'components/ui/Header'
import { EmptyCard } from 'components/EmptyCard'
import { UI_SIZE } from 'constants/ui.constant'
import { Card } from 'components/Card'
import { CardType } from 'models/card.model'

type CardListPageProps = {
  onClickAddCard: () => void
  cards: CardType[]
}

export const CardListPage: React.FC<CardListPageProps> = ({ onClickAddCard, cards }) => {
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
