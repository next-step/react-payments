import React, { memo, MouseEvent } from 'react';

import { CardNumbers } from './CardNumbers';
import { CardOwnerName } from './CardOwnerName';
import { CardExpireDate } from './CardExpireDate';
import { CardWrapper } from './Card.styled';

import { ThemeSetter } from '@/components/ThemeSetter';
import { useSelectCardCompany } from '@/stores/CardCreatorContext';

interface CardProps {
  onCardClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

const Card = memo(({ onCardClick }: CardProps) => {
  const cardCompany = useSelectCardCompany();

  return (
    <ThemeSetter className="card-box" theme={cardCompany?.theme} onClick={onCardClick}>
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
    </ThemeSetter>
  );
});

export { Card };
