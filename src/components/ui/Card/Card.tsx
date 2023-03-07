import React from 'react'
import { AddPaymentCard, PaymentCard } from 'constants/card'
import { CARD_COMPANYS } from 'constants/cardCompanyCode'
import { UiSize } from 'constants/ui'
import './Card.css'

type CardProps = {
  card: PaymentCard | AddPaymentCard
  size: Omit<UiSize, 'medium'>
  isShowNickname?: boolean
  onClick?: (card: PaymentCard | AddPaymentCard) => void
  isEmptyCardView?: boolean
}

const Card: React.FC<CardProps> = ({
  card,
  size,
  onClick,
  isShowNickname = false,
  isEmptyCardView = false,
}) => {
  const cardCompnayInfo = CARD_COMPANYS[card.cardCompanyCode]
  const {
    firstNumber,
    secondNumber,
    thridNumber = '',
    fourthNumber = '',
  } = card.cardNumbers

  const onUpdateOrAddCard = (card: PaymentCard | AddPaymentCard) => {
    if (!onClick) return

    onClick(card)
  }

  const cardLayout = isEmptyCardView ? (
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
        className={`card-btn ${isEmptyCardView ? 'empty-card' : ''}`}
        onClick={() => onUpdateOrAddCard(card)}
        disabled={Boolean(!onClick)}
      >
        {cardLayout}
      </button>
    </div>
  )
}

export default Card
