import { usePayments } from "../../store/context";

const Card = () => {
  const { cardNumbers, expirationDate, cardOwnerName } = usePayments();

  const isHypen = (number: string) => {
    return number.length === 4 ? " - " : "";
  };

  const maskingCardNumbers = (number: string) => number.replace(/./g, "*");

  const showCardName = (name: string) => (name ? name : "NAME");

  const showCardExpiry = (cardExpiry: string[]) =>
    cardExpiry[0] ? `${cardExpiry[0]} / ${cardExpiry[1] || "YY"}` : "MM / YY";

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
              {cardNumbers[0]} {isHypen(cardNumbers[0])}
              {cardNumbers[1]} {isHypen(cardNumbers[1])}
              {maskingCardNumbers(cardNumbers[2])} {isHypen(cardNumbers[2])}
              {maskingCardNumbers(cardNumbers[3])}
            </span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text text-elipsis">{showCardName(cardOwnerName)}</span>
            <span className="card-text">{showCardExpiry(expirationDate)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
