import { CARD_TYPE_LIST } from "features/card/data/cardTypes";
import { CardInfo } from "features/card/types/card.type";

type CardDisplayMode = "preview" | "complete";

interface CardProps extends CardInfo {
  mode: CardDisplayMode;
  onClick?: () => void;
}

export default function Card({ mode, onClick, ...cardInfo }: CardProps) {
  const {
    cardNumber1,
    cardNumber2,
    cardNumber3,
    cardNumber4,
    expireDate,
    cardOwner,
    cardType,
  } = cardInfo;

  const cardTypeColor = CARD_TYPE_LIST.find(
    (card) => card.type === cardType
  )?.color;

  const cardContentContainerClass =
    mode === "preview"
      ? `empty-card ${cardTypeColor}`
      : `big-card ${cardTypeColor}`;
  const cardTextClass = mode === "preview" ? "card-text" : "card-text__big";
  const cardChipClass =
    mode === "preview" ? "small-card__chip" : "big-card__chip";

  return (
    <div className="card-box" onClick={onClick}>
      <div className={cardContentContainerClass}>
        <div className="card-top">
          <span className={cardTextClass}>{cardType}</span>
        </div>
        <div className="card-middle">
          <div className={cardChipClass}></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className={cardTextClass}>
              {cardNumber1} {cardNumber2} {"・".repeat(cardNumber3.length)}{" "}
              {"・".repeat(cardNumber4.length)}
            </span>
          </div>
          <div className="card-bottom__info">
            <span className={`${cardTextClass} text-overflow`}>
              {cardOwner ? cardOwner : "NAME"}
            </span>
            <span className={cardTextClass}>
              {expireDate ? expireDate : "MM / YY"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
