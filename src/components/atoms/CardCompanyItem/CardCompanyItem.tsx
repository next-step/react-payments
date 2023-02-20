import React from 'react'
import { CardCompanyCodeType, CardTypeKeys } from 'models/card.model'
import { CARD_COMPANYS } from 'constants/card'
import './CardCompanyItem.css'

type CardCompanyItemProps = {
  cardCode: CardCompanyCodeType
  onClick: (value: string, name: CardTypeKeys) => void
}

const CardCompanyItem: React.FC<CardCompanyItemProps> = ({
  cardCode,
  onClick,
}) => {
  return (
    <button
      onClick={() => onClick(cardCode, 'cardCompanyCode')}
      className='card-company-button'
    >
      <span
        className='card-company-color'
        style={{ backgroundColor: CARD_COMPANYS[cardCode].color }}
      ></span>
      <span className='card-company-name'>{CARD_COMPANYS[cardCode].name}</span>
    </button>
  )
}

export default CardCompanyItem
