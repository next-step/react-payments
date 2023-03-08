import React, { memo, MouseEvent } from 'react';

import { CardNumbers } from './CardNumbers';
import { CardOwnerName } from './CardOwnerName';
import { CardExpireDate } from './CardExpireDate';
import { CardWrapper } from './Card.styled';

import { ThemeSetter } from '@/components/ThemeSetter';
import { useSelectCardCompany } from '@/stores/CardCreatorContext';
import { CardNickname } from './CardNickname';

interface CardProps {
  cardId?: string;
  disableNickname?: boolean;
  onCardClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

// TODO: 카드컴퍼니 에러가 있을 경우 테두리 깜박이기 및 문구 추가.
const Card = memo(({ cardId, disableNickname, onCardClick }: CardProps) => {
  const cardCompany = useSelectCardCompany();

  return (
    <ThemeSetter className="card-box flex-column-center" theme={cardCompany?.value?.theme} onClick={onCardClick}>
      <CardWrapper>
        <div className="card-top">{cardCompany?.value?.name}</div>
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
      {disableNickname || <CardNickname />}
    </ThemeSetter>
  );
});

export { Card };
