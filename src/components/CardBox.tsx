import { memo } from 'react';
import { ICardBox } from '../domain/types';

const config = {
  type: {
    'small': 'small-card',
    'big': 'big-card'
  }
};

function CardBox({ cardNumber, cardHolder, expiredDate, type = 'small', color, brand }: ICardBox) {
  return (
    <div className="card-box">
      <div className={config.type[type]} style={{ backgroundColor: color }}>
        <div className="card-top">
          <span className="card-text">{brand}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{cardNumber}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{cardHolder}</span>
            <span className="card-text">{expiredDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CardBox);
