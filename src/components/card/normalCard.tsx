import { CardData, CardType } from '@common/constants'

const NormalCard = ({ type, cardData }: { type: CardType; cardData: CardData }) => {
  const { cardName, cardNumber, expired, userName, alias } = cardData
  return (
    <div className="card-box">
      <div className={`${type}-card`}>
        <div className="card-top">
          <span className="card-text">{cardName}</span>
        </div>
        <div className="card-middle">
          <div className="card-middle__chip" />
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{cardNumber}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{userName}</span>
            <span className="card-text">{expired}</span>
          </div>
        </div>
      </div>
      {alias ? <span className="card-nickname">{alias}</span> : null}
    </div>
  )
}
export default NormalCard
