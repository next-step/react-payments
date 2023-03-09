import { memo } from 'react';
import { ICard } from '../../../domain/types';
import useCardFilter from './hooks/useCardFilter';

const config = {
  type: {
    'small': 'small-card',
    'big': 'big-card'
  }
};

function Card({ cardNumber, cardHolder, expiredDate, type = 'small', color, cardCompany }: ICard) {
  const { previewCardNumber, formatExpiredDate } = useCardFilter({ cardNumber, expiredDate });

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
            <span className="card-text">{previewCardNumber}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{cardHolder}</span>
            <span className="card-text">{formatExpiredDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Card);
