import React, { MouseEvent, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { Card, ThemeSetter } from '@/components';
import { useGetErrorMessage } from '@/hooks';
import { routes } from '@/routes';
import { useCardContextApiSelector, useCardSelector } from '@/stores/CardContext';
import type { TCardCompany } from '@/types';

import { useCardCompanySelectModal, useSequentialAutoFocus, useAutoCompanyChecker } from './hooks';
import { SubmitButton } from './SubmitButton';
import {
  CardNumbersInputListPure,
  ExpireDatesInputListPure,
  CardOwnerInputPure,
  SecurityCodesInputListPure,
  PasswordsInputListPure,
} from './InputComponents';
import { StyledErrorMessage } from './CardCreator.styled';

export function CardCreator() {
  const cardInfo = useCardSelector();
  const cardContextApis = useCardContextApiSelector();

  const { CardCompanySelectModal, showModal, hideModal } = useCardCompanySelectModal();

  const errorMessage = useGetErrorMessage(cardInfo?.cardCompany);

  useAutoCompanyChecker(cardInfo?.cardNumbers[0].value, cardInfo?.cardNumbers[1].value);
  useSequentialAutoFocus(cardInfo);

  const handleCardClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      showModal();
    },
    [showModal]
  );

  const handleCardCompanySelectModalClick = useCallback(
    (cardCompany: TCardCompany) => {
      cardContextApis?.dispatch({ type: 'cardCompany', payload: { value: cardCompany } });
      hideModal();
    },
    [cardContextApis, hideModal]
  );

  return (
    <ThemeSetter className="app" theme={cardInfo?.cardCompany.value?.theme}>
      <h2 className="page-title">
        <Link to={routes.home} className="mr-10">{`<`}</Link> 카드 추가
      </h2>

      <Card
        cardCompany={cardInfo?.cardCompany?.value}
        cardExpireDate={cardInfo?.expireDates?.map((expireDate) => expireDate.value)}
        cardNumbers={cardInfo?.cardNumbers}
        cardOwnerName={cardInfo?.cardOwners?.[0]?.value}
        additionalBottomElement={
          !cardInfo?.cardCompany.checkIsValid() && errorMessage ? (
            <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
          ) : undefined
        }
        onCardClick={handleCardClick}
      />

      <CardNumbersInputListPure cardNumbers={cardInfo?.cardNumbers} />
      <ExpireDatesInputListPure expireDates={cardInfo?.expireDates} />
      <CardOwnerInputPure cardOwners={cardInfo?.cardOwners} />
      <SecurityCodesInputListPure securityCodes={cardInfo?.securityCodes} />
      <PasswordsInputListPure passwords={cardInfo?.passwords} />

      <SubmitButton />

      <CardCompanySelectModal onCardCompanyClick={handleCardCompanySelectModalClick} />
    </ThemeSetter>
  );
}
