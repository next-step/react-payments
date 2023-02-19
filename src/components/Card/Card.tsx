import React from 'react'
import { CardType } from 'models/card.model'
import './Card.css'
import { CARD_COMPANYS } from 'constants/card'

type CardProps = {
  card: CardType
}

const Card: React.FC<CardProps> = ({ card }) => {
  const cardCompnayInfo = CARD_COMPANYS[card.cardCompanyCode]
  const [firstCardNumber, secondCardNumber] = card.cardNumber.split('-')
  return (
    <div className='card-box'>
      <div className='small-card' style={{ backgroundColor: cardCompnayInfo.color }}>
        <div className='card-top'>
          <span className='card-text'>{cardCompnayInfo.name}</span>
        </div>
        <div className='card-middle'>
          <div className='small-card__chip'></div>
        </div>
        <div className='card-bottom'>
          <div className='card-bottom__number'>
            <span className='card-text'>
              <span className='card-number'>{firstCardNumber}</span>
              <span className='card-number'>{secondCardNumber}</span>
              <span className='card-number'>●●●●</span>
              <span className='card-number'>●●●●</span>
            </span>
          </div>
          <div className='card-bottom__info'>
            <span className='card-text'>{card.cardOwner}</span>
            <span className='card-text'>{card.expireDate}</span>
          </div>
        </div>
      </div>
      <span className='card-nickname'>{card.cardNickname}</span>
    </div>
  )
}

export default Card
