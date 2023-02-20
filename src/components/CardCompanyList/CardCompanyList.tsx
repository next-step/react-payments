import React from 'react'
import { CARD_COMPANYS, CARD_COMPNAYS_CODE } from 'constants/card'
import { CardCompanyCodeType, UpdateCardParams } from 'models/card.model'
import './CardCompanyList.css'

type CardCompanyListProps = {
  onClick: (params: UpdateCardParams) => void
}

const CardCompanyList: React.FC<CardCompanyListProps> = ({ onClick }) => {
  return (
    <ul className='card-company-list'>
      {Object.values(CARD_COMPNAYS_CODE).map(
        (cardCode) =>
          cardCode !== 'C000' && (
            <li className='card-company-item' key={cardCode}>
              <button
                onClick={() =>
                  onClick({ value: cardCode, name: 'cardCompanyCode' })
                }
                className='card-company-button'
              >
                <span
                  className='card-company-color'
                  style={{ backgroundColor: CARD_COMPANYS[cardCode].color }}
                ></span>
                <span className='card-company-name'>
                  {CARD_COMPANYS[cardCode].name}
                </span>
              </button>
            </li>
          ),
      )}
    </ul>
  )
}

export default CardCompanyList
