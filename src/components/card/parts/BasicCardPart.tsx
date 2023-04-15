interface BasicCardPartProps {
  cardNumbers: string
  cardOwner: string
  cardExpiredDate: string
}

const BasicCardPart = ({ cardNumbers, cardOwner, cardExpiredDate }: BasicCardPartProps) => {
  return (
    <>
      <div className="card-top" />
      <div className="card-middle">
        <div className="small-card__chip" />
        <div className="card-number">
          <span>{cardNumbers}</span>
        </div>
      </div>
      <div className="card-bottom">
        <div className="card-bottom__info">
          <span className="card-text">{cardOwner}</span>
          <span className="card-text">{cardExpiredDate}</span>
        </div>
      </div>
    </>
  )
}

export default BasicCardPart
