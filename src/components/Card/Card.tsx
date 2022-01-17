import { Card, CardNumber } from '../../types';

const getMaskedCardNumberStr = (cardNumber: CardNumber) => {
  cardNumber[2] = '*'.repeat(cardNumber[2].length);
  cardNumber[3] = '*'.repeat(cardNumber[3].length);

  return cardNumber.filter(Boolean).join(' - ');
};

const CardItem = ({ card }: { card: Card }) => {
  const cardNumberStr = getMaskedCardNumberStr(card.cardNumber);
  const expireDateStr = `${card.expireDate[0]} ${card.expireDate[0].length ? '/' : ''} ${
    card.expireDate[1]
  }`;

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

export default CardItem;
