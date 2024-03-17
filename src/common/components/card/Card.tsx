import { CardContext } from "../../../App";

type CardDisplayMode = "preview" | "complete";

interface CardProps {
  mode: CardDisplayMode;
}

export default function Card({ mode }: CardProps) {
  const cardState = CardContext.useSelector((state) => state.context.card);

  const {
    cardNumber1,
    cardNumber2,
    cardNumber3,
    cardNumber4,
    cardName,
    expireDate,
    cardOwner,
  } = cardState;

  const cardContentContainerClass =
    mode === "preview" ? "empty-card" : "big-card";
  const cardTextClass = mode === "preview" ? "card-text" : "card-text__big";
  const cardChipClass =
    mode === "preview" ? "small-card__chip" : "big-card__chip";

  return (
    <div className="card-box">
      <div className={cardContentContainerClass}>
        <div className="card-top">
          <span className={cardTextClass}>{cardName}</span>
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
