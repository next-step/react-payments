import React from 'react'
import { PaymentCard } from 'models/card.model'
import { CARD_COMPANYS, EMPTY_CARD_VIEW_ID } from 'constants/card'
import { UiSize } from 'models/ui.model'
import './Card.css'

type CardProps = {
  card: PaymentCard
  size: Omit<UiSize, 'medium'>
  isShowNickname?: boolean
  onClick?: (card?: PaymentCard) => void
}

const Card: React.FC<CardProps> = ({
  card,
  size,
  onClick,
  isShowNickname = false,
}) => {
  const cardCompnayInfo = CARD_COMPANYS[card.cardCompanyCode]
  const { firstNumber, secondNumber, thridNumber, fourthNumber } =
    card.cardNumbers

  const onUpdateOrAddCard = (card: PaymentCard) => {
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
                {card.cardNumbers && (
                  <>
                    <span className='card-number'>{firstNumber}</span>
                    <span className='card-number'>{secondNumber}</span>
                    <span className='card-number security-code'>
                      {thridNumber.replace(/./g, '⦁')}
                    </span>
                    <span className='card-number security-code'>
                      {fourthNumber.replace(/./g, '⦁')}
                    </span>
                  </>
                )}
              </span>
            </div>
            <div className='card-bottom__info'>
              <span className={`card-text-${size} card-owner`}>
                <span className='card-owner-text'>{card.cardOwner}</span>
              </span>
              <span className={`card-text-${size} card-expire`}>
                <span>
                  {card.cardExpireDate.month}/{card.cardExpireDate.year}
                </span>
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
