interface CardProps {
  cardNumbers: { first: string; second: string; third: string; fourth: string }
  name: string
  expiratedYear: string
  expiratedMonth: string
}

function Card({ cardNumbers, name, expiratedYear, expiratedMonth }: CardProps) {
  const { first, second, third, fourth } = cardNumbers
  return (
    <div className="card-box">
      <div className="empty-card">
        <div className="card-top" />
        <div className="card-middle">
          <div className="small-card__chip" />
          <div className="card-number">
            <span>{`${first} ${second} ${third} ${fourth}`}</span>
          </div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__info">
            <span className="card-text">{name || 'Name'}</span>
            <span className="card-text">{`${expiratedMonth || 'MM'} / ${
              expiratedYear || 'YY'
            }`}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
