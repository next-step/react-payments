interface CardProps {
  cardNumber: { first: string; second: string; third: string; fourth: string }
  name: string
  expiratedYear: number
  expiratedMonth: number
}

function Card({ cardNumber, name, expiratedYear, expiratedMonth }: CardProps) {
  const convertedCardNumber = cardNumber
  return (
    <div className="card-box">
      <div className="empty-card">
        <div className="card-top" />
        <div className="card-middle">
          <div className="small-card__chip" />
          <div className="card-number">
            <span>{convertedCardNumber.first || null}</span>
          </div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__info">
            <span className="card-text">{name || 'Name'}</span>
            <span className="card-text">{`${expiratedYear || 'YY'} / ${
              expiratedMonth || 'MM'
            }`}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
