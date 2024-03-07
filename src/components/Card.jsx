import { getSplitString4 } from "../util/regExp";
import CardBox from "./CardBox";

export default function Card({
  alias = "",
  cardNumber = "",
  expirationDateMM = "",
  expirationDateYY = "",
  cardOwnerName = "",
}) {
  // 카드 번호
  const displayCardNumber = getSplitString4(Object.values(cardNumber).join(""))
    .map((value, i) => {
      if (i >= 2) {
        return "*".repeat(value.length);
      }
      return value;
    })
    .join("-");

  // 만료일
  const displayExpirationDateMM = expirationDateMM || "MM";
  const displayExpirationDateYY = expirationDateYY || "YY";

  // 카드 소유자 이름(선택)
  const displayCardOwnerName = cardOwnerName;

  return (
    <CardBox>
      <div className="card-top">
        <span className="card-text">{alias}</span>
      </div>
      <div className="card-middle">
        <div className="small-card__chip"></div>
        <span className="card-text">{displayCardNumber}</span>
      </div>
      <div className="card-bottom">
        <div className="card-bottom_info">
          <span className="card-text">{displayCardOwnerName}</span>
          <span className="card-text">
            {displayExpirationDateMM} / {displayExpirationDateYY}
          </span>
        </div>
      </div>
    </CardBox>
  );
}
