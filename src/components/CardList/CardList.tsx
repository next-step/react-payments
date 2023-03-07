import React from 'react'
import { Card } from 'components/ui/Card'
import { UI_SIZE } from 'constants/ui'
import { PaymentCard } from 'constants/card'

type CardListProps = {
  cards: PaymentCard[]
  onClick: (card?: PaymentCard) => void
  isIncludeAddCardView?: boolean
}

const CardList: React.FC<CardListProps> = ({
  cards,
  onClick,
  isIncludeAddCardView = false,
}) => {
  const currentCardList = isIncludeAddCardView ? [...cards] : [...cards]
  return (
    <>
      {currentCardList.map((card) => (
        <Card
          key={card.id}
          card={card}
          size={UI_SIZE.SMALL}
          onClick={onClick}
          isShowNickname
        />
      ))}
    </>
  )
}

export default CardList
