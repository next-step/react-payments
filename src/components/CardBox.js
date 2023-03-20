// import { useContext } from "react";
// import { CardContext } from "../context/CardContext";
import utils from "../utils/card";

export default function CardBox({ cardInfo, isEmpty, cardSize, onClick }) {
  // const { cardInfo } = useContext(CardContext);

  return (
    <div className="card-box" onClick={onClick}>
      <div
        className={
          (isEmpty ? "empty" : cardSize) +
          "-card " +
          (cardInfo && cardInfo["cardColor"] ? cardInfo["cardColor"] : "")
        }
      >
        <div className="card-top">
          <span className={cardSize === "big" ? "card-text__big" : "card-text"}>
            {cardInfo && cardInfo["cardCompanyName"]}
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
              {cardInfo && utils.maskingCardNumber(cardInfo["cardNumber"])}
            </span>
          </div>
          <div className="card-bottom__info">
            <span
              className={cardSize === "big" ? "card-text__big" : "card-text"}
            >
              {cardInfo && cardInfo["cardOwnerName"]}
            </span>
            <span
              className={cardSize === "big" ? "card-text__big" : "card-text"}
            >
              {cardInfo &&
                utils.maskingCardExpiration(cardInfo["cardExpiration"])}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
