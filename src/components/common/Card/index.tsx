import "./card.css";
import { CardInput } from "./card.type";
interface CardProps {
  input?: CardInput;
  isBigCard?: boolean;
  backgroundColor?: string;
  onClick?: () => void;
}

const Card = ({
  input,
  isBigCard = false,
  backgroundColor,
  onClick,
}: CardProps) => {
  const mode =
    input && Object.values(input).length > 0 ? "small-card" : "empty-card";
  const newCard = typeof onClick === "function" && "+";

  return (
    <div className="card-box">
      <div
        className={`${isBigCard ? "big-card" : mode} ${
          newCard && "cursor-pointer"
        }`}
        style={{ backgroundColor }}
        onClick={onClick}
      >
        {newCard || (
          <>
            <div className="card-top">
              <span className="card-text">{input?.title}</span>
            </div>
            <div className="card-middle">
              <div className="small-card__chip"></div>
            </div>
            <div className="card-bottom">
              <div className="card-bottom__number">
                <span className="card-text">
                  {[
                    input?.number1,
                    input?.number2,
                    input?.number3,
                    input?.number4,
                  ].join("-")}
                </span>
              </div>
              <div className="card-bottom__info">
                <span className="card-text">{input?.name || "NAME"}</span>
                <span className="card-text">
                  {`${input?.month || "MM"}/${input?.year || "YY"}`}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
