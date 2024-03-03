import { CardInfo } from "common/types/card.type";

interface BigCardProps
  extends Pick<CardInfo, "cardNumber" | "cardOwner" | "expireDate"> {}

function BigCard({ cardNumber, cardOwner, expireDate }: BigCardProps) {
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
            <span className="card-text__big">{cardNumber}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text__big text-overflow">{cardOwner}</span>
            <span className="card-text__big">{expireDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigCard;
