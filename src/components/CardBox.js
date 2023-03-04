function maskingCardNumber(cardNumber) {
  const cardNumberArray = Object.values(cardNumber);
  return cardNumberArray
    .map((value, index) => {
      return index < 3 && value.length === 4 ? value + "-" : value;
    })
    .join("");
}

function maskingCardExpiration(cardExpiration) {
  const cardExpirationArray = Object.values(cardExpiration);
  return cardExpirationArray
    .map((value, index) => {
      return index == 0 && value < 13 && value > 0 ? value + " / " : value;
    })
    .join("");
}

export default function CardBox({
  cardNumber,
  cardOwnerName,
  cardExpiration,
  cardColor,
  cardCompanyName,
  isEmpty,
  cardSize,
  onClick,
}) {
  return (
    <div className="card-box" onClick={onClick}>
      <div
        className={
          (isEmpty ? "empty" : cardSize) +
          "-card " +
          (cardColor ? cardColor : null)
        }
      >
        <div className="card-top">
          <span className={cardSize === "big" ? "card-text__big" : "card-text"}>
            {cardCompanyName}
          </span>
        </div>
        <div className="card-middle">
          <div className={cardSize + "-card__chip"}></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span
              className={cardSize === "big" ? "card-text__big" : "card-text"}
            >
              {maskingCardNumber(cardNumber)}
            </span>
          </div>
          <div className="card-bottom__info">
            <span
              className={cardSize === "big" ? "card-text__big" : "card-text"}
            >
              {cardOwnerName}
            </span>
            <span
              className={cardSize === "big" ? "card-text__big" : "card-text"}
            >
              {maskingCardExpiration(cardExpiration)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
