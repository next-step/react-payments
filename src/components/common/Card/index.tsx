import "./card.css";

type CardInput = {
  title?: string;
  number?: string;
  name?: string;
  expiry?: string;
};

interface CardProps {
  input: CardInput;
  backgroundColor?: string;
}

const Card = ({ input, backgroundColor }: CardProps) => {
  const mode = Object.values(input).length > 0 ? "small-card" : "empty-card";
  const { title, number, name, expiry } = input;

  return (
    <div className="card-box">
      <div className={mode} style={{ backgroundColor }}>
        <div className="card-top">
          <span className="card-text">{title}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{number}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{name || "NAME"}</span>
            <span className="card-text">{expiry || "MM / YY"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
