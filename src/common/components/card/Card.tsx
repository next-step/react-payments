import { CardInfo } from "pages/AddCard";

export default function Card({ cardNumber, expireDate, cardOwner }: CardInfo) {
  return (
    <div className="card-box">
      <div className="empty-card">
        <div className="card-top"></div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <span>{cardNumber}</span>
          <div className="card-bottom__info">
            <span className="card-text">{cardOwner ? cardOwner : "NAME"}</span>
            <span className="card-text">
              {expireDate ? expireDate : "MM / YY"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
