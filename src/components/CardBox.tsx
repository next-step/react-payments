interface Props {
  cardCompany?: string;
  cardNumber?: number;
  userName?: string;
  expiredDate?: string;
  type?: 'empty' | 'small' | 'big';
}

const config = {
  type: {
    'empty': 'empty-card',
    'small': 'small-card',
    'big': 'big-card',
  }
};

export default function CardBox({ cardCompany, cardNumber, userName, expiredDate, type }: Props) {
  return (
    <div className="card-box">
      <div className={config.type[type] || config.type.empty}>
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