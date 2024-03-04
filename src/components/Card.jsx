import { getSplitString4 } from "../util/regExp";

export default function Card({ alias = "", cardNumber }) {
  const displayCardNumber = getSplitString4(cardNumber)
    .map((value, i) => {
      if (i >= 2) {
        return "*".repeat(value.length);
      }
      return value;
    })
    .join("-");

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
          <span className="card-text">MM / YY</span>
        </div>
      </div>
    </>
  );
}
