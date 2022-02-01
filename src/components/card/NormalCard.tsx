import { CardProps } from ".";
import { CardData } from "@common/defines";

const NormalCard = ({ type, cardData }: NormalCardProps) => {
  const { cardName, cardNumber, expired, userName, alias, id } = cardData;
  return (
    <div className="card-box" data-id={id}>
      <div className={`${type}-card`}>
        <div className="card-top">
          <span className="card-text">{cardName}</span>
        </div>
        <div className="card-middle">
          <div className={`${type}-card__chip`} />
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{cardNumber}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{userName}</span>
            <span className="card-text">{expired}</span>
          </div>
        </div>
      </div>
      {alias ? <span className="card-nickname">{alias}</span> : null}
    </div>
  );
};

export interface NormalCardProps extends CardProps {
  cardData: CardData;
}

export default NormalCard;
