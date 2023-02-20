import Span from "./Span";

export default function CardBox({ cardNumber, cardOwnerName, cardExpiration }) {
  function maskingCardNumber(cardNumber) {
    const cardNumberArray = Object.values(cardNumber);    
    return cardNumberArray.map((value, index) => {
      return (index < 3 && value.length === 4)? value + "-" : value;
    }).join("");
  }

  function maskingCardExpiration(cardExpiration) {
    const cardExpirationArray = Object.values(cardExpiration);
    return cardExpirationArray.map((value, index) => {
      return (index == 0 && value < 13 && value > 0)? value + " / " : value;
    }).join("");
  }
  return (
    <div className="card-box">
      <div className="empty-card">
        <div className="card-top">
          <Span className="card-text">클린카드</Span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <Span className="card-text">{maskingCardNumber(cardNumber)}</Span>
          </div> 
          <div className="card-bottom__info">
            <Span className="card-text">{cardOwnerName}</Span>
            <Span className="card-text">{maskingCardExpiration(cardExpiration)}</Span>
          </div>
        </div>
      </div>
    </div>
  );
}
