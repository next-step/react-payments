import { getSplitString4 } from "../util/regExp";

export default function Card({ alias = "", cardNumber, expirationDate }) {
  // 카드 번호
  const displayCardNumber = getSplitString4(Object.values(cardNumber).join(""))
    .map((value, i) => {
      if (i >= 2) {
        return "*".repeat(value.length);
      }
      return value;
    })
    .join("-");

  const displayExpirationDate = Object.values(expirationDate).join(" / ");
  return (
    <>
      <div className="card-top">
        <span className="card-text">{alias}</span>
      </div>
      <div className="card-middle">
        <div className="small-card__chip"></div>
        <span className="card-text">{displayCardNumber}</span>
      </div>
      <div className="card-bottom">
        <div className="card-bottom_info">
          <span className="card-text">NAME</span>
          <span className="card-text">{displayExpirationDate}</span>
        </div>
      </div>
    </>
  );
}
