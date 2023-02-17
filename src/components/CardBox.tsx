export interface CardBoxType {
  cardCompany?: string;
  cardNumber?: string;
  userName?: string;
  expiredDate?: string;
  type?: 'small' | 'big';
}

const config = {
  type: {
    'small': 'small-card',
    'big': 'big-card',
  }
};

export default function CardBox({ cardCompany, cardNumber, userName, expiredDate, type }: CardBoxType) {
  return (
    <div className="card-box">
      <div className={config.type[type] || config.type.small}>
        <div className="card-top">
          <span className="card-text">{cardCompany}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{cardNumber}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{userName}</span>
            <span className="card-text">{expiredDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}