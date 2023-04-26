import React from 'react';
import { ICard } from '../../domain/payments/types';
import useCard from './hooks/useCard';
import { ellipsis } from '../../util/string';
import { CARD_INPUT } from '../../domain/payments/constants';

type TCardNumberProps = {
  card: ICard;
  onClick?: (card: ICard) => void;
};

function CardNumber({ card, onClick }: TCardNumberProps) {
  const { numbers, name, expiredMonth, expiredYear, owner } = card;
  const { cardNumber, cardType, displayCardName } = useCard({ cardNumbers: numbers, cardName: name });

  return (
    <div className="card-box" onClick={() => onClick?.(card)}>
      <div className="small-card" style={{ backgroundColor: cardType.color }}>
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
            <span className="card-text">{owner && ellipsis(owner, CARD_INPUT.OWNER.VISIBLE_LENGTH)}</span>
            <span className="card-text">
              {expiredMonth} / {expiredYear}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardNumber;
