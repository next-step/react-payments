import React from 'react'
import { CardType, CardTypeKeys } from 'models/card.model'
import { CARD_COMPANYS, EMPTY_CARD_VIEW_ID } from 'constants/card'
import { UiSize } from 'models/ui.model'
import './Card.css'

type CardProps = {
  card: CardType
  size: Omit<UiSize, 'medium'>
  isShowNickname?: boolean
  onClick?: (card?: CardType) => void
}

const Card: React.FC<CardProps> = ({
  card,
  size,
  onClick,
  isShowNickname = false,
}) => {
  const cardCompnayInfo = CARD_COMPANYS[card.cardCompanyCode]
  const [first, second, third, fourth] = card.cardNumber.split('-')

  const onUpdateOrAddCard = (card: CardType) => {
    if (!onClick) return
    if (card.id === EMPTY_CARD_VIEW_ID) {
      onClick()
    } else {
      onClick(card)
    }
  }

  const cardLayout =
    card.id === EMPTY_CARD_VIEW_ID ? (
      <>+</>
    ) : (
      <>
        <div
          className={`${size}-card`}
          style={{ backgroundColor: cardCompnayInfo.color }}
        >
          <div className='card-top'>
            <span className={`card-text-${size}`}>{cardCompnayInfo.name}</span>
          </div>
          <div className='card-middle'>
            <div className={`${size}-card__chip`}></div>
          </div>
          <div className='card-bottom'>
            <div className='card-bottom__number'>
              <span className={`card-text-${size}`}>
                {card.cardNumber && (
                  <>
                    <span className='card-number'>{first}</span>
                    <span className='card-number'>{second}</span>
                    <span className='card-number'>{third}</span>
                    <span className='card-number'>{fourth}</span>
                  </>
                )}
              </span>
            </div>
            <div className='card-bottom__info'>
              <span className={`card-text-${size} card-owner`}>
                <span className='card-owner-text'>{card.cardOwner}</span>
              </span>
              <span className={`card-text-${size} card-expire`}>
                {card.expireDate}
              </span>
            </div>
          </div>
        </div>
        {isShowNickname && (
          <span className='card-nickname'>{card.cardNickname}</span>
        )}
      </>
    )

  return (
    <div className='card-box'>
      <button
        type='button'
        className={`card-btn ${
          card.id === EMPTY_CARD_VIEW_ID ? 'empty-card' : ''
        }`}
        onClick={() => onUpdateOrAddCard(card)}
        disabled={Boolean(!onClick)}
      >
        {cardLayout}
      </button>
    </div>
  )
}

export default Card
