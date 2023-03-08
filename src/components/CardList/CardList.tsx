import React from 'react'
import { Card } from 'components/ui/Card'
import { UI_SIZE } from 'constants/ui'
import {
  AddOrUpdateCardType,
  INITAL_CARD_STATE,
  PaymentCard,
} from 'constants/card'
import './CardList.css'
import { AiFillCloseCircle } from 'react-icons/ai'

type CardListProps = {
  cards: PaymentCard[]
  onClick: (card: AddOrUpdateCardType) => void
  isIncludeAddCardView?: boolean
  onClickDeleteBtn: (id: string) => void
}

const CardList: React.FC<CardListProps> = ({
  cards,
  onClick,
  isIncludeAddCardView = false,
  onClickDeleteBtn,
}) => {
  const onClickCardDelete = (card: PaymentCard) => {
    onClickDeleteBtn(card.id)
  }
  return (
    <>
      {cards.map((card) => (
        <div className='card-box-wrap' key={card.id}>
          <Card
            card={card}
            size={UI_SIZE.SMALL}
            onClick={onClick}
            isShowNickname
          />
          <button
            type='button'
            className='card-delete-btn'
            onClick={() => onClickCardDelete(card)}
          >
            <AiFillCloseCircle />
          </button>
        </div>
      ))}
      {isIncludeAddCardView && (
        <Card
          card={INITAL_CARD_STATE}
          size={UI_SIZE.SMALL}
          onClick={onClick}
          isShowNickname={false}
          isEmptyCardView
          onClickDeleteBtn={onClickDeleteBtn}
        ></Card>
      )}
    </>
  )
}

export default CardList
