import { memo } from 'react';
import { useFilter } from '../hooks';
import { CardBoxType } from '../domain/types';

const config = {
  type: {
    'small': 'small-card',
    'big': 'big-card',
  }
};

function CardBox({ cardCompany, cardNumber, cardHolder, expiredDate, type = 'small', color }: CardBoxType) {
  const { filterCardNumber, filterExpiredDate } = useFilter();
  const memoCardNumber = filterCardNumber(cardNumber || '');
  const memoExpiredDate = filterExpiredDate(expiredDate || '');

  return (
    <div className="card-box">
      <div className={config.type[type]} style={{ backgroundColor: color }}>
        <div className="card-top">
          <span className="card-text">{cardCompany}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{memoCardNumber}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{cardHolder}</span>
            <span className="card-text">{memoExpiredDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CardBox);