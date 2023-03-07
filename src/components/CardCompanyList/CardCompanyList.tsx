import React from 'react'
import {
  CARD_COMPNAYS_CODE,
  CardCompanyCodeType,
} from 'constants/cardCompanyCode'
import './CardCompanyList.css'
import { CardCompanyItem } from 'components/CardCompanyItem'

type CardCompanyListProps = {
  onClick: (value: CardCompanyCodeType) => void
}

const CardCompanyList: React.FC<CardCompanyListProps> = ({ onClick }) => {
  return (
    <ul className='card-company-list'>
      {Object.values(CARD_COMPNAYS_CODE).map(
        (cardCode) =>
          cardCode !== CARD_COMPNAYS_CODE.NULL && (
            <li className='card-company-item' key={cardCode}>
              <CardCompanyItem cardCode={cardCode} onClick={onClick} />
            </li>
          ),
      )}
    </ul>
  )
}

export default CardCompanyList
