import React from 'react';
import { ICard } from '../../domain/payments/types';
import { getShorteningString } from '../../util/string';
import '../../styles/card.css';

const CARD_VISIBLE_MAX_LENGTH_NAME = 5;
const CARD_VISIBLE_NUMBER_INDEX = [0, 1];

const convertToEncryptedChars = (s = '') => '∙'.repeat(s.length);
const getViewCardNumbers = (cardNumbers: string[]) => {
  const result: string[] = [];
  return cardNumbers
    .reduce((accumulated, current, idx) => {
      if (CARD_VISIBLE_NUMBER_INDEX.includes(idx)) {
        return [...accumulated, current || ''];
      }
      return [...accumulated, convertToEncryptedChars(current)];
    }, result)
    .join('-');
};

type TCardProps = {
  card: ICard;
  deletable?: boolean;
  onDeleteClick?: (card: ICard) => void;
};

function Card({ card, deletable = false, onDeleteClick }: TCardProps) {
  const { cardName, owner, expiredMonth, expiredYear, numbers, alias } = card;
  const cardNumber = getViewCardNumbers(numbers);
  const displayCardName = alias && alias.length ? alias : cardName;

  const handleDelete = () => {
    onDeleteClick && onDeleteClick(card);
  };

  return (
    <>
      <div className="card-box">
        <div className="small-card">
          <div className="card-top">{displayCardName && <span className="card-text">{displayCardName}</span>}</div>
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
              <span className="card-text">{owner && getShorteningString(owner, CARD_VISIBLE_MAX_LENGTH_NAME)}</span>
              <span className="card-text">
                {expiredMonth} / {expiredYear}
              </span>
            </div>
          </div>
        </div>
      </div>
      {deletable && (
        <div>
          <button type="button" onClick={handleDelete}>
            삭제
          </button>
        </div>
      )}
    </>
  );
}

export default Card;
