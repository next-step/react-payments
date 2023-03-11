import React, { memo, MouseEvent, ReactElement } from 'react';

import { ThemeSetter } from '@/components/ThemeSetter';
import { useSelectCardCompany } from '@/stores/CardCreatorContext';
import { useErrorContext } from '@/pages/CardCreator/InputComponents/hooks/useErrorContext';

import { CardNumbers } from './CardNumbers';
import { CardOwnerName } from './CardOwnerName';
import { CardExpireDate } from './CardExpireDate';
import { CardNickname } from './CardNickname';
import { CardWrapper, ErrorMessage } from './Card.styled';

interface CardProps {
  disableNickname?: boolean;
  additionalIcon?: ReactElement;
  onCardClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

const Card = memo(({ disableNickname, additionalIcon, onCardClick }: CardProps) => {
  const cardCompany = useSelectCardCompany();

  const errorMessage = useErrorContext(
    {
      inValid: '카드 회사를 선택해주세요.',
    },
    [{ errorType: 'cardCompany', messageType: 'inValid' }]
  );

  return (
    <ThemeSetter className="card-box flex-column-center" theme={cardCompany?.value?.theme} onClick={onCardClick}>
      <CardWrapper pointCursor={!!onCardClick}>
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
        {additionalIcon}
      </CardWrapper>
      {disableNickname || <CardNickname />}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </ThemeSetter>
  );
});

export { Card };
