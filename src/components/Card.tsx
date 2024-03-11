import React from 'react'

export interface CardProps {
  cardNumberOne: string
  cardNumberTwo: string
  ownerName: string
  expiredMonth: string
  expiredYear: string
}

const Card = ({ props }: { props: CardProps }) => {
  const { cardNumberOne, cardNumberTwo, ownerName, expiredMonth, expiredYear } =
    props

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
              {cardNumberOne} - {cardNumberTwo} - oooo - oooo
            </span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text__big">{ownerName}</span>
            <span className="card-text__big">
              {expiredMonth}/ {expiredYear}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card
