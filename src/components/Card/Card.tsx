import React from 'react'
import { CardType } from 'models/card.model'
import './Card.css'
import { CARD_COMPANYS } from 'constants/card'
import { UiSize } from 'models/ui.model'

type CardProps = {
  card: CardType
  size: Omit<UiSize, 'medium'>
}

const Card: React.FC<CardProps> = ({ card, size }) => {
  const cardCompnayInfo = CARD_COMPANYS[card.cardCompanyCode]
  const [first, second, third, fourth] = card.cardNumber.split('-')

  return (
    <div className='card-box'>
      <div className={`${size}-card`} style={{ backgroundColor: cardCompnayInfo.color }}>
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
                  <input type='text' value={first} className='card-number' readOnly />
                  <input type='text' value={second} className='card-number' readOnly />
                  <input type='password' value={third} className='card-number' readOnly />
                  <input type='password' value={fourth} className='card-number' readOnly />
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
    </div>
  )
}

export default Card
