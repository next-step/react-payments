import { CardBox } from '@/components/card'

interface SmallCardProps {
  cardName: string
  cardNumbers: string
  cardOwner: string
  cardExpiredDate: string
}

const SmallCard = ({ cardName, cardNumbers, cardOwner, cardExpiredDate }: SmallCardProps) => {
  return (
    <CardBox>
      <div className="small-card">
        <div className="card-top">
          <span className="card-text">{cardName}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip" />
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{cardNumbers}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{cardOwner}</span>
            <span className="card-text">{cardExpiredDate}</span>
          </div>
        </div>
      </div>
    </CardBox>
  )
}

export default SmallCard
