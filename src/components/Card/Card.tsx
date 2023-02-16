import React from 'react';
import { ICard } from '../../domain/payments/types';
import '../../styles/card.css';
import { generatePad } from '../../util/number';
import { getShorteningString } from '../../util/string';

const getEncryptedChars = (s = '') => Array.from({ length: s.length }, () => '•').join('');
const getViewCardNumbers = (cardNumbers: string[]) => {
  const result: string[] = [];
  return cardNumbers
    .reduce((accumulated, current, idx) => {
      if ([0, 1].includes(idx)) {
        return [...accumulated, current || ''];
      }
      return [...accumulated, getEncryptedChars(current)];
    }, result)
    .join('-');
};

function Card({ cardName, owner, expiredMonth, expiredYear, numbers }: ICard) {
  const cardNumber = getViewCardNumbers(numbers);

  return (
    <div className="card-box">
      <div className="small-card">
        <div className="card-top">{cardName && <span className="card-text">{cardName}</span>}</div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{cardNumber}</span>
          </div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__info">
            <span className="card-text">{owner && getShorteningString(owner, 5)}</span>
            <span className="card-text">
              {generatePad(expiredMonth, 2)} / {generatePad(expiredYear, 2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
