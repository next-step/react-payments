import React, { MouseEvent, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '@/routes';
import { Card } from '@/components/Card';
import { ThemeSetter } from '@/components/ThemeSetter';
import { useCardContextApiSelector, useCardInfoSelector } from '@/stores/CardCreatorContext';

import { CardCompanyModel, useCardCompanySelectModal } from './hooks/useCardCompanySelectModal';
import { useSequentialAutoFocus } from './hooks/useSequentialAutoFocus';
import { CardNumbersInputListPure } from './InputComponents/CardNumbersInputList';
import { ExpireDatesInputListPure } from './InputComponents/ExpireDatesInputList';
import { CardOwnerInputPure } from './InputComponents/CardOwnerInput';
import { SecurityCodesInputListPure } from './InputComponents/SecurityCodesInputList';
import { PasswordsInputListPure } from './InputComponents/PasswordsInputList';
import { SubmitButton } from './SubmitButton';

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
    (cardCompany: CardCompanyModel) => {
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
