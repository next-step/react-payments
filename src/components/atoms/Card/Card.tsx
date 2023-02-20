import React from 'react'
import { CardType } from 'models/card.model'
import { CARD_COMPANYS, EMPTY_CARD_VIEW_ID } from 'constants/card'
import { UiSize } from 'models/ui.model'
import './Card.css'

type CardProps = {
  card: CardType
  size: Omit<UiSize, 'medium'>
  onClick?: () => void
}

const Card: React.FC<CardProps> = ({ card, size, onClick }) => {
  const cardCompnayInfo = CARD_COMPANYS[card.cardCompanyCode]
  const [first, second, third, fourth] = card.cardNumber.split('-')

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
            <span className='card-text'>{cardCompnayInfo.name}</span>
          </div>
          <div className='card-middle'>
            <div className={`${size}-card__chip`}></div>
          </div>
          <div className='card-bottom'>
            <div className='card-bottom__number'>
              <span className='card-text'>
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
              <span className='card-text'>{card.cardOwner}</span>
              <span className='card-text'>{card.expireDate}</span>
            </div>
          </div>
        </div>
        <span className='card-nickname'>{card.cardNickname}</span>
      </>
    )

  return (
    <div className='card-box'>
      <button
        type='button'
        className={`card-btn ${
          card.id === EMPTY_CARD_VIEW_ID ? 'empty-card' : ''
        }`}
        onClick={onClick}
        disabled={Boolean(!onClick)}
      >
        {cardLayout}
      </button>
    </div>
  )
}

export default Card
