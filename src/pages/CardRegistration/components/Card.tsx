import { MARK } from '../../../constant';

interface Card {
  ownerName: string;
  expiration: {
    month: string;
    year: string;
  };
}

export default function Card({ ownerName, expiration }: Card) {
  return (
    <div className="card-box">
      <div className="empty-card">
        <div className="card-top"></div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__info">
            <span className="card-text word-break-all">{ownerName}</span>
            <span className="card-text">{`${expiration.month} ${MARK.slash} ${expiration.year}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
