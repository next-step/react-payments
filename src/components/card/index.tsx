import { usePayments } from "../../store/context";

const Card = () => {
  const { cardNumbers, expirationDate, cardOwnerName } = usePayments();

  const showCardNumbers = (number: string) =>
    number.length === 4 ? number + " - " : "";

  const maskingCardNumbers = (number: string, isLastPlace: boolean) =>
    number.length === 4
      ? number.replace(/./g, "*") + (isLastPlace ? "" : " - ")
      : "";

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
              {showCardNumbers(cardNumbers[0])}
              {showCardNumbers(cardNumbers[1])}
              {maskingCardNumbers(cardNumbers[2], false)}
              {maskingCardNumbers(cardNumbers[3], true)}
            </span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{showCardName(cardOwnerName)}</span>
            <span className="card-text">{showCardExpiry(expirationDate)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
