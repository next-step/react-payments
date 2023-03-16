import React, { MouseEvent, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '@/routes';
import { Card, ThemeSetter } from '@/components';
import { useCardContextApiSelector, useCardInfoSelector } from '@/stores/CardContext';
import type { TCardCompany } from '@/types';

import { useCardCompanySelectModal, useSequentialAutoFocus } from './hooks';
import { SubmitButton } from './SubmitButton';
import {
  CardNumbersInputListPure,
  ExpireDatesInputListPure,
  CardOwnerInputPure,
  SecurityCodesInputListPure,
  PasswordsInputListPure,
} from './InputComponents';

export function CardCreator() {
  const cardInfo = useCardInfoSelector();
  const apis = useCardContextApiSelector();

  const { CardCompanySelectModal, showModal, hideModal } = useCardCompanySelectModal();

  const handleCardClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      showModal();
    },
    [showModal]
  );

  const handleCardCompanySelectModalClick = useCallback(
    (cardCompany: TCardCompany) => {
      apis?.dispatch({ type: 'cardCompany', payload: { value: cardCompany } });
      hideModal();
    },
    [apis, hideModal]
  );

  useSequentialAutoFocus(cardInfo);

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
