import { CardBox } from '@/components/card'

interface BigCardProps {
  onClickDeleteButton?: () => void
  cardName: string
  cardNumbers: string
  cardOwner: string
  cardExpiredDate: string
}

const BigCard = ({ onClickDeleteButton, cardName, cardNumbers, cardOwner, cardExpiredDate }: BigCardProps) => {
  return (
    <CardBox>
      <div className="big-card">
        <div className="card-top">
          <span className="card-text__big">{cardName}</span>
          {onClickDeleteButton && (
            <button type="button" className="card-text" onClick={onClickDeleteButton}>
              카드삭제
            </button>
          )}
        </div>
        <div className="card-middle">
          <div className="big-card__chip" />
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text__big">{cardNumbers}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text__big">{cardOwner}</span>
            <span className="card-text__big">{cardExpiredDate}</span>
          </div>
        </div>
      </div>
    </CardBox>
  )
}

export default BigCard
