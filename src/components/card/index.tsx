const isHypen = (number: string) => {
  return number.length === 4 ? " - " : "";
};

const maskingCardNumbers = (number: string) => number.replace(/./g, "*");

const showCardName = (name: string) => (name ? name : "NAME");

const showCardExpiry = (month: string, year: string) => {
  return month ? `${month} / ${year || "YY"}` : "MM / YY";
};

const Card = ({
  cardNumbers,
  cardExpiration,
  cardOwnerName,
  cardCompany,
}: any) => {
  return (
    <div className="card-box">
      <div className="empty-card" style={{ background: cardCompany.color }}>
        <div className="card-top">
          <span className="card-nick-name">{cardCompany.name}</span>
        </div>
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
            <span className="card-text text-elipsis">
              {showCardName(cardOwnerName)}
            </span>
            <span className="card-text">
              {showCardExpiry(cardExpiration.month, cardExpiration.year)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
