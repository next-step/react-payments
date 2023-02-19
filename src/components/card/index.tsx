import { usePayments } from "../../store/context";

const Card = () => {
  const { cardNumbers } = usePayments();

  const showCardNumbers = (number: string) => number.length === 4 ? number + " - " : "";

  const maskingCardNumbers = (number: string, isLastPlace: boolean) =>
    number.length === 4 ? number.replace(/./g, "*") + (isLastPlace ? "" : " - ") : "";

  const cardName = (name: string) => name ? name : "NAME";

  const cardExpiry = (expiry: string) => expiry ? expiry : "MM / YY";

  return (
    <div className="card-box">
      <div className="empty-card">
        <div className="card-top"></div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">
              {showCardNumbers(cardNumbers[0])}
              {showCardNumbers(cardNumbers[1])}
              {maskingCardNumbers(cardNumbers[2], false)}
              {maskingCardNumbers(cardNumbers[3], true)}
            </span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{cardName("")}</span>
            <span className="card-text">{cardExpiry("")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
