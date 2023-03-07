import React from 'react'
import { Card } from 'components/ui/Card'
import { UI_SIZE } from 'constants/ui'
import {
  AddOrUpdateCardType,
  INITAL_CARD_STATE,
  PaymentCard,
} from 'constants/card'

type CardListProps = {
  cards: PaymentCard[]
  onClick: (card: AddOrUpdateCardType) => void
  isIncludeAddCardView?: boolean
}

const CardList: React.FC<CardListProps> = ({
  cards,
  onClick,
  isIncludeAddCardView = false,
}) => {
  return (
    <>
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          size={UI_SIZE.SMALL}
          onClick={onClick}
          isShowNickname
        />
      ))}
      {isIncludeAddCardView && (
        <Card
          card={INITAL_CARD_STATE}
          size={UI_SIZE.SMALL}
          onClick={onClick}
          isShowNickname={false}
          isEmptyCardView
        ></Card>
      )}
    </>
  )
}

export default CardList
