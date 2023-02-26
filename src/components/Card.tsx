import React from 'react';

import type { CardNumber, CardOwner, ExpireDate } from '@/types';

interface CardProps {
  cardNumbers: {
    isHide: boolean;
    value?: CardNumber;
  }[];
  ownerName?: CardOwner;
  expireDates: (ExpireDate | undefined)[];
}

function Card({ cardNumbers, expireDates, ownerName }: CardProps) {
  return (
    <div className="empty-card">
      <div className="card-top" />
      <div className="card-middle">
        <div className="small-card__chip" />
      </div>
      <div className="card-bottom">
        <div className="card-bottom__number">
          {cardNumbers.map(({ isHide, value }, i) => {
            return (
              <span key={`card-number-${i}`} className="card-number-wrapper card-number-spacing">
                {value && value.split('').map((cardNum) => (isHide ? '*' : cardNum))}
              </span>
            );
          })}
        </div>
        <div className="card-bottom__info">
          <span className="card-text card-name-spacing">{ownerName || 'NAME'}</span>
          <span className="card-text">
            <span className="card-text card-expire-date">{expireDates[0]?.padStart(2, '0')}</span>
            <span className="card-text mx-5">/</span>
            <span className="card-text card-expire-date">{expireDates[1]?.padStart(2, '0')}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
