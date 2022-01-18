import { CardData, CardType, SetRoute } from '@/common/constants'
import NewCard from './newCard'

const Card = ({
  type = 'empty',
  cardData,
  setRoute,
}: {
  type: CardType
  cardData: CardData | null
  setRoute?: SetRoute
}) => {
  if (type === 'new') return <NewCard setRoute={setRoute} />

  const cardType = cardData ? type : 'empty'
  const { cardName, cardNumber, expired, userName, alias } = cardData || {}

  return (
    <div className="card-box" data-testid="card-wrap">
      <div className={`${cardType}-card`} data-testid="card">
        <div className="card-top">{cardName && <span className="card-text">{cardName}</span>}</div>
        <div className="card-middle">
          <div className="card-middle__chip" />
        </div>
        <div className="card-bottom">
          {cardNumber && (
            <div className="card-bottom__number">
              <span className="card-text">{cardNumber}</span>
            </div>
          )}
          <div className="card-bottom__info">
            <span className="card-text">{userName || 'NAME'}</span>
            <span className="card-text">{expired || 'MM / YY'}</span>
          </div>
        </div>
      </div>
      {alias && <span className="card-nickname">{alias}</span>}
    </div>
  )
}

export default Card
