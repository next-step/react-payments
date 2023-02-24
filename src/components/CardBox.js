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

export default function CardBox({ cardNumber, cardOwnerName, cardExpiration }) {
  return (
    <div className="card-box">
      <div className="empty-card">
        <div className="card-top">
          <span className="card-text">클린카드</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{maskingCardNumber(cardNumber)}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{cardOwnerName}</span>
            <span className="card-text">
              {maskingCardExpiration(cardExpiration)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
