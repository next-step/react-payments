import React from 'react'

const Card = () => {
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
            <span className="card-text__big">1111 - 2222 - oooo - oooo</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text__big">YUJO</span>
            <span className="card-text__big">12 / 23</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card
