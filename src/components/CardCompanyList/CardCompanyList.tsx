import React from 'react'
import { CARD_COMPANYS, CARD_COMPNAYS_CODE } from 'constants/card'
import { CardCompanyCodeType } from 'models/card.model'
import './CardCompanyList.css'

type CardCompanyListProps = {
  onClick: (value: CardCompanyCodeType) => void
}

const CardCompanyList: React.FC<CardCompanyListProps> = ({ onClick }) => {
  return (
    <ul className='card-company-list'>
      {Object.values(CARD_COMPNAYS_CODE).map(
        (cardCode) =>
          cardCode !== 'C000' && (
            <li className='card-company-item' key={cardCode}>
              <button onClick={() => onClick(cardCode)} className='card-company-button'>
                <span
                  className='card-company-color'
                  style={{ backgroundColor: CARD_COMPANYS[cardCode].color }}
                ></span>
                <span className='card-company-name'>{CARD_COMPANYS[cardCode].name}</span>
              </button>
            </li>
          ),
      )}
    </ul>
  )
}

export default CardCompanyList
