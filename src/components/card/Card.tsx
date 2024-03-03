import { CardStateType } from '@/provider/CardInfoProvider';

type CardProps = CardStateType;
const Card = (cardState: CardProps) => {
  const { ownerName, month, year } = cardState;
  const displayMonth = month ? `${month} / ` : '';
  const expirationDate = `${displayMonth}${year || ''}`;

  return (
    <div className="card-box">
      <div className="empty-card">
        <div className="card-top"></div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__info">
            <span className="card-text">{ownerName}</span>
            <span className="card-text">{expirationDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
