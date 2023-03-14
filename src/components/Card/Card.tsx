import React, { memo, MouseEvent, ReactElement } from 'react';

import { ThemeSetter } from '@/components/ThemeSetter';
import { useCardInfoSelector } from '@/stores/CardCreatorContext';
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

export const Card = memo(function Card({ disableNickname, additionalIcon, onCardClick }: CardProps) {
  const cardInfo = useCardInfoSelector();

  const errorMessage = useErrorContext(
    {
      inValid: '카드 회사를 선택해주세요.',
    },
    [{ errorType: 'cardCompany', messageType: 'inValid' }]
  );

  return (
    <ThemeSetter
      className="card-box flex-column-center"
      theme={cardInfo?.cardCompany?.value?.theme}
      onClick={onCardClick}
    >
      <CardWrapper pointCursor={!!onCardClick}>
        <div className="card-top">{cardInfo?.cardCompany?.value?.name}</div>
        <div className="card-middle">
          <div className="small-card__chip" />
        </div>
        <div className="card-bottom">
          <CardNumbers cardNumbers={cardInfo?.cardNumbers} />
          <div className="card-bottom__info">
            <CardOwnerName ownerName={cardInfo?.cardOwners} />
            <CardExpireDate expireDates={cardInfo?.expireDates} />
          </div>
        </div>
        {additionalIcon}
      </CardWrapper>
      {disableNickname || <CardNickname nickname={cardInfo?.cardNickname} />}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </ThemeSetter>
  );
});
