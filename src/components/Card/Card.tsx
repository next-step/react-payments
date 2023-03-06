import React, { MouseEvent } from 'react';

import { CardCompanyModel } from '@/pages/CardCreator/hooks/useCardCompanySelectModal/CardCompanySelector/cardCompanyList';

import { CardNumbers } from './CardNumbers';
import { CardOwnerName } from './CardOwnerName';
import { CardExpireDate } from './CardExpireDate';
import { CardWrapper } from './Card.styled';

interface CardProps {
  cardCompany?: CardCompanyModel;
  onCardClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

function Card({ cardCompany, onCardClick }: CardProps) {
  return (
    <div className="card-box" onClick={onCardClick}>
      <CardWrapper>
        <div className="card-top">{cardCompany?.name}</div>
        <div className="card-middle">
          <div className="small-card__chip" />
        </div>
        <div className="card-bottom">
          <CardNumbers />
          <div className="card-bottom__info">
            <CardOwnerName />
            <CardExpireDate />
          </div>
        </div>
      </CardWrapper>
    </div>
  );
}

export { Card };
