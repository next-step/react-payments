import "./card.css";

type CardInput = {
  title?: string;
  number?: string;
  name?: string;
  expiry?: string;
};

interface CardProps {
  input?: CardInput;
  backgroundColor?: string;
  onClick?: () => void;
}

const Card = ({ input, backgroundColor, onClick }: CardProps) => {
  const mode = input ? "small-card" : "empty-card";
  const newCard = typeof onClick === "function" && "+";

  return (
    <div className="card-box">
      <div className={mode} style={{ backgroundColor }} onClick={onClick}>
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
                <span className="card-text">{input?.number}</span>
              </div>
              <div className="card-bottom__info">
                <span className="card-text">{input?.name || "NAME"}</span>
                <span className="card-text">{input?.expiry || "MM / YY"}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
