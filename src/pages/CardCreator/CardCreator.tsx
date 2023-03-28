import React, { MouseEvent, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { Card, ThemeSetter } from '@/components';
import { useGetErrorMessage } from '@/hooks';
import { routes } from '@/routes';
import { useCardApiContext, useCardContext, TCardCompany } from '@/stores/CardContext';

import { useCardCompanySelectModal, useSequentialAutoFocus, useAutoCompanyChecker } from './hooks';
import { SubmitButton } from './SubmitButton';
import {
  CardNumbersInputList,
  ExpireDatesInputList,
  CardOwnerInput,
  SecurityCodesInputList,
  PasswordsInputList,
} from './InputComponents';
import { StyledErrorMessage } from './CardCreator.styled';

export function CardCreator() {
  const cardInfo = useCardContext();
  const cardContextApis = useCardApiContext();

  const { CardCompanySelectModal, showModal, hideModal } = useCardCompanySelectModal();

  // @ts-ignore
  const errorMessage = useGetErrorMessage(cardInfo?.cardCompanies[0].value);

  useAutoCompanyChecker(cardInfo?.cardNumbers[0].value, cardInfo?.cardNumbers[1].value);
  useSequentialAutoFocus(
    cardInfo && [
      cardInfo.cardNumbers,
      cardInfo.expireDates,
      cardInfo.cardOwners,
      cardInfo.securityCodes,
      cardInfo.passwords,
      cardInfo.cardCompanies,
    ]
  );

  const handleCardClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      showModal();
    },
    [showModal]
  );

  const handleCardCompanySelectModalClick = useCallback(
    (cardCompany: TCardCompany) => {
      cardContextApis?.dispatch({ type: 'cardCompanies', payload: { value: cardCompany } });
      hideModal();
    },
    [hideModal, cardContextApis]
  );

  if (!cardInfo) return null;

  return (
    <ThemeSetter className="app" theme={cardInfo?.cardCompanies[0].value?.theme}>
      <h2 className="page-title">
        <Link to={routes.home} className="mr-10">{`<`}</Link> 카드 추가
      </h2>

      <Card
        cardCompany={cardInfo?.cardCompanies[0].value}
        cardExpireDate={cardInfo?.expireDates?.map((expireDate) => expireDate.value)}
        cardNumbers={cardInfo?.cardNumbers}
        cardOwnerName={cardInfo?.cardOwners?.[0]?.value}
        additionalBottomElement={
          !cardInfo?.cardCompanies[0].errorMessage ? (
            <StyledErrorMessage>{cardInfo?.cardCompanies[0].errorMessage}</StyledErrorMessage>
          ) : undefined
        }
        onCardClick={handleCardClick}
      />

      <CardNumbersInputList cardNumbers={cardInfo?.cardNumbers} />
      <ExpireDatesInputList expireDates={cardInfo?.expireDates} />
      <CardOwnerInput cardOwners={cardInfo?.cardOwners} />
      <SecurityCodesInputList securityCodes={cardInfo?.securityCodes} />
      <PasswordsInputList passwords={cardInfo?.passwords} />

      <SubmitButton />

      <CardCompanySelectModal onCardCompanyClick={handleCardCompanySelectModalClick} />
    </ThemeSetter>
  );
}
