import { CardForm } from '../../types';
import { getMaskedCardNumberStr } from '../../utils/card';

export const 카드예시 = ({ cardForm }: { cardForm: CardForm }) => {
  const cardNumberStr = getMaskedCardNumberStr(cardForm.cardNumber);
  const expireDateStr = `${cardForm.expireDate[0]} ${cardForm.expireDate[0].length ? '/' : ''} ${
    cardForm.expireDate[1]
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
                {cardForm.userName}
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
