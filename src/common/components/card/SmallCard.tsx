import { CardInfo } from "features/card/types/card.type";

export default function SmallCard({
  cardNumber,
  expireDate,
  cardOwner,
}: CardInfo) {
  return (
    <div className="card-box">
      <div className="empty-card">
        <div className="card-top">
          <span className="card-text"></span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{cardNumber}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text text-overflow">
              {cardOwner ? cardOwner : "NAME"}
            </span>
            <span className="card-text">
              {expireDate ? expireDate : "MM / YY"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
