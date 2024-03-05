import React from 'react'
import { CardData } from '../pages/AddCard'

const Card = ({ inputs }: { inputs: CardData }) => {
  return (
    <div className="card-box">
      <div className="big-card">
        <div className="card-top">
          <span className="card-text__big">클린카드</span>
        </div>
        <div className="card-middle">
          <div className="big-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text__big">
              {inputs.cardNumberOne} - {inputs.cardNumberTwo} - oooo - oooo
            </span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text__big">{inputs.ownerName}</span>
            <span className="card-text__big">
              {inputs.expiredMonth}/ {inputs.expiredYear}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card
