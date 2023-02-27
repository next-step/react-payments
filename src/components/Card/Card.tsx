import React from 'react';

import type { CardOwner, ExpireDate } from '@/types';

import { CardName, CardNumbers } from './CardName';
import { CardWrapper } from './Card.styled';

interface CardProps {
  cardNumbers: CardNumbers;
  ownerName?: CardOwner;
  expireDates: (ExpireDate | undefined)[];
}

function Card({ cardNumbers, expireDates, ownerName }: CardProps) {
  return (
    <div className="card-box">
      <CardWrapper>
        <div className="card-top" />
        <div className="card-middle">
          <div className="small-card__chip" />
        </div>
        <div className="card-bottom">
          <CardName cardNumbers={cardNumbers} />
          <div className="card-bottom__info">
            <span className="card-text card-name-spacing">{ownerName || 'NAME'}</span>
            <span className="card-text">
              <span className="card-text card-expire-date">{expireDates[0]?.padStart(2, '0')}</span>
              <span className="card-text mx-5">/</span>
              <span className="card-text card-expire-date">{expireDates[1]?.padStart(2, '0')}</span>
            </span>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
}

export { Card };
