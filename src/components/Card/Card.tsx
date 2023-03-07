import React, { memo, MouseEvent } from 'react';

import { CardNumbers } from './CardNumbers';
import { CardOwnerName } from './CardOwnerName';
import { CardExpireDate } from './CardExpireDate';
import { CardWrapper } from './Card.styled';
import { useSelectCardCompany } from '@/stores/cardCreator';

interface CardProps {
  onCardClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

const Card = memo(({ onCardClick }: CardProps) => {
  const cardCompany = useSelectCardCompany();

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
});

export { Card };
