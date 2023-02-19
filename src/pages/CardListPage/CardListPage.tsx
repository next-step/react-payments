import { Card } from 'components/Card'
import useCards from 'hooks/use-cards'
import React from 'react'
import { Header } from 'components/ui/Header'
import { EmptyCard } from 'components/EmptyCard'
import { UI_SIZE } from 'constants/ui.constant'

type CardListPageProps = {
  onClickAddCard: () => void
}

export const CardListPage: React.FC<CardListPageProps> = ({ onClickAddCard }) => {
  const { loading, error, cards } = useCards()
  if (loading) return <p>loading</p>
  if (error) return <p>error</p>
  if (!cards) return <p></p>

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
