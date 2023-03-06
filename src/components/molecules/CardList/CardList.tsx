import React from 'react'
import { PaymentCard } from 'models/card.model'
import { Card } from 'components/atoms/Card'
import { UI_SIZE } from 'constants/ui.constant'
import { ADD_CARD_VIEW_VALUE } from 'constants/card'

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
