import { formatNumber } from "utils";
import "./card.css";
import { CardInput } from "./card.type";

interface CardProps {
  input?: CardInput;
  isBigCard?: boolean;
  backgroundColor?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Card = ({
  input,
  isBigCard = false,
  backgroundColor,
  onClick,
}: CardProps) => {
  const mode =
    input && Object.values(input).length > 0 ? "small-card" : "empty-card";
  const isNewCard = typeof onClick === "function" && !input && "+";

  return (
    <div className="card-box">
      <button onClick={onClick}>
        <div
          className={`${isBigCard ? "big-card" : mode} cursor-pointer`}
          style={{ backgroundColor }}
        >
          {isNewCard || (
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
                    {input?.number
                      ? formatNumber({ input: input.number, startPoint: 2 })
                      : input?.number}
                  </span>
                </div>
                <div className="card-bottom__info">
                  <span className="card-text ellipsis max-w-94">
                    {input?.name || "NAME"}
                  </span>
                  <span className="card-text">
                    {`${input?.expiry || "MM / YY"}`}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </button>
    </div>
  );
};

export default Card;
