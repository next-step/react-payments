import format from 'date-fns/format';
import { Card, CardForm, CardNumber } from '../../types';

const getMaskedCardNumberStr = (cardNumber: string) => {
  const numbers = cardNumber.split('-');

  numbers[2] = '*'.repeat(numbers[2].length);
  numbers[3] = '*'.repeat(numbers[3].length);

  return numbers.filter(Boolean).join(' - ');
};

export const CardItem = ({ card }: { card: Card }) => {
  const cardNumberStr = getMaskedCardNumberStr(card.cardNumber);
  const expireDateStr = format(card.expireDate, 'MM / yy');

  return (
    <>
      <div className="card-box">
        <div className="empty-card">
          <div className="card-top"></div>
          <div className="card-middle">
            <div className="small-card__chip"></div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom__number">
              <span className="card-text">{cardNumberStr}</span>
            </div>
            <div className="card-bottom__info">
              <div className="card-text" style={{ boxSizing: 'border-box', width: '60%' }}>
                {card.userName}
              </div>
              <span className="card-text" style={{ fontSize: '0.75rem' }}>
                {expireDateStr}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
