// status 가 필요함

type CardProps = {
  name?: string
  expirationDate?: string
  // expirationDate?: [string, string]
  cardNumber?: string
}

function CardBox(props: CardProps) {
  const { name, expirationDate, cardNumber } = props
  // const [expirationMonth, expirationYear] = expirationDate || ['MM', 'YY']

  return (
    <div className="card-box">
      <div className="empty-card">
        <div className="card-top">
          {/* <span className="card-text">클린카드</span> */}
        </div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{cardNumber}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{name || 'NAME'}</span>
            <span className="card-text">
              {expirationDate || 'MM/YY'}
              {/* {expirationMonth}/{expirationYear} */}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardBox
