import { useContext } from 'react';
import { AppContext } from '../AppContext';

const Card = (card) => {
  const { nickName } = card;
  const { inputCard } = useContext(AppContext);
  const {
    cardNumbers = ['', '', '', ''],
    expirationMonth = '',
    expirationYear = '',
    cardHolder = '',
    companyName = '',
  } = inputCard;

  const mask = (val) => val.replace(/\s/g, '').replace(/\S/g, 'o');

  return (
    <>
      <div className="card-box">
        <div className="small-card">
          <div className="card-top">
            <span className="card-text">{companyName}</span>
          </div>
          <div className="card-middle">
            <div className="small-card__chip"></div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom__number">
              <span className="card-text">
                {cardNumbers[0]} {cardNumbers[0] ? '- ' : null}
                {cardNumbers[1]} {cardNumbers[1] ? '- ' : null}
                {mask(cardNumbers[2])} {cardNumbers[2] ? '- ' : null}
                {mask(cardNumbers[3])}
              </span>
            </div>
            <div className="card-bottom__info">
              <span className="card-text">{cardHolder}</span>
              <span className="card-text">
                {expirationMonth} {expirationMonth ? ' / ' : ''}{' '}
                {expirationYear}
              </span>
            </div>
          </div>
        </div>
      </div>
      {nickName ? <span className="card-nickname">{nickName}</span> : null}
    </>
  );
};

export default Card;
