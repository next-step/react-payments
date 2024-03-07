import { CardInfo } from "features/card/types/card.type";

type CardDisplayMode = "preview" | "complete";

interface CardProps extends Pick<CardInfo, "cardName" | "cardNumber" | "cardOwner" | "expireDate"> {
  mode: CardDisplayMode;
}

export default function Card({ mode, cardName, cardNumber, cardOwner, expireDate }: CardProps) {
  const cardContentContainerClass = mode === "preview" ? "empty-card" : "big-card";
  const cardTextClass = mode === "preview" ? "card-text" : "card-text__big";
  const cardChipClass = mode === "preview" ? "small-card__chip" : "big-card__chip";

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
            <span className={cardTextClass}>{cardNumber}</span>
          </div>
          <div className="card-bottom__info">
            <span className={`${cardTextClass} text-overflow`}>{cardOwner ? cardOwner : "NAME"}</span>
            <span className={cardTextClass}>{expireDate ? expireDate : "MM / YY"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
