import { CardStateType } from '@/provider/CardInfoProvider';

type CardProps = CardStateType;

const Card = ({ ownerName, month, year, cardNumbers }: CardProps) => {
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
          <span className="card-text"></span>
          <div className="card-bottom__info">
            <span className="card-text">{ownerName || 'NAME'}</span>
            <span className="card-text">{expirationDate || 'MM/YY'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
