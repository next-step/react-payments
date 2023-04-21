import { CardBox } from '@/components/card'

interface SmallCardProps {
  cardName: string
  cardNumbers: string
  cardOwner: string
  cardExpiredDate: string
  cardType?: {
    name: string
    color: string
    bg: string
  }
}

const SmallCard = ({
  cardName,
  cardNumbers,
  cardOwner,
  cardExpiredDate,
  cardType: { name, color, bg },
}: SmallCardProps) => {
  return (
    <CardBox>
      <div className="small-card" style={{ backgroundColor: bg, color }}>
        <div className="card-top">
          <span className="card-text">{cardName || name}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip" />
          <div className="card-number">
            <span className="card-text">{cardNumbers}</span>
          </div>
        </div>
        <div className="card-bottom">
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
