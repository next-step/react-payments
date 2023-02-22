import React from 'react'
import { CardType } from 'models/card.model'
import { Card } from 'components/atoms/Card'
import { UI_SIZE } from 'constants/ui.constant'
import { ADD_CARD_VIEW_VALUE } from 'constants/card'

type CardListProps = {
  cards: CardType[]
  onClick: () => void
  isIncludeAddCardView?: boolean
}

const CardList: React.FC<CardListProps> = ({
  cards,
  onClick,
  isIncludeAddCardView = false,
}) => {
  const currentCardList = isIncludeAddCardView
    ? [...cards, ADD_CARD_VIEW_VALUE]
    : [...cards]
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
