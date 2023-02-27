import React, { MouseEvent } from 'react';

import type { CardOwner, ExpireDate } from '@/types';
import { CardCompany } from '@/pages/CardCreator/hooks/useCardCompanySelectModal/CardCompanySelector/cardCompanyList';

import { CardName, CardNumbers } from './CardName';
import { CardWrapper } from './Card.styled';

interface CardProps {
  cardCompany?: CardCompany;
  cardNumbers: CardNumbers;
  ownerName?: CardOwner;
  expireDates: (ExpireDate | undefined)[];
  onCardClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

function Card({ cardCompany, cardNumbers, expireDates, ownerName, onCardClick }: CardProps) {
  return (
    <div className="card-box" onClick={onCardClick}>
      <CardWrapper>
        <div className="card-top">{cardCompany?.name}</div>
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
