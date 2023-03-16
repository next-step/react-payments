import React, { memo, MouseEvent, ReactElement } from 'react';

import { ThemeSetter } from '@/components/ThemeSetter';
import { useErrorContext } from '@/pages/CardCreator/InputComponents/hooks/useErrorContext';

import type {
  TCardCompanyProp,
  TCardExpireDateProp,
  TCardNicknameProp,
  TCardNumberProp,
  TCardOwnerNameProp,
} from './types';
import { CardNumbers } from './CardNumbers';
import { CardOwnerName } from './CardOwnerName';
import { CardExpireDate } from './CardExpireDate';
import { CardNickname } from './CardNickname';
import { StyledCard, StyledErrorMessage } from './Card.styled';

interface CardProps {
  disableNickname?: boolean;
  additionalIcon?: ReactElement;
  cardCompany?: TCardCompanyProp;
  cardNumbers?: TCardNumberProp[];
  cardOwnerName?: TCardOwnerNameProp;
  cardExpireDate?: TCardExpireDateProp[];
  cardNickname?: TCardNicknameProp;
  onCardClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export const Card = memo(function Card({
  disableNickname,
  additionalIcon,
  cardCompany,
  cardNumbers,
  cardOwnerName,
  cardExpireDate,
  cardNickname,
  onCardClick,
}: CardProps) {
  const errorMessage = useErrorContext(
    {
      inValid: '카드 회사를 선택해주세요.',
    },
    [{ errorType: 'cardCompany', messageType: 'inValid' }]
  );

  return (
    <ThemeSetter className="card-box flex-column-center" theme={cardCompany?.theme} onClick={onCardClick}>
      <StyledCard pointCursor={!!onCardClick}>
        <div className="card-top">{cardCompany?.name}</div>
        <div className="card-middle">
          <div className="small-card__chip" />
        </div>
        <div className="card-bottom">
          <CardNumbers cardNumbers={cardNumbers} />
          <div className="card-bottom__info">
            <CardOwnerName ownerName={cardOwnerName} />
            <CardExpireDate expireDates={cardExpireDate} />
          </div>
        </div>
        {additionalIcon}
      </StyledCard>
      {disableNickname || <CardNickname nickname={cardNickname} />}
      {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
    </ThemeSetter>
  );
});
