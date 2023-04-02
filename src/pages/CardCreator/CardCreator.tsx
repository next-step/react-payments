import React, { MouseEvent, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { Card, ThemeSetter } from '@/components';
import { useCardContextApis, useCardContext } from '@/contexts/CardContext';
import { routes } from '@/router';
import { TCardCompany } from '@/types';

import {
  useCardCompanySelectModal,
  useSequentialAutoFocus,
  useAutoCompanyChecker,
  useInvalidFinderOnMount,
} from './hooks';
import {
  CardNumbersInputList,
  ExpireDatesInputList,
  CardOwnerInput,
  SecurityCodesInputList,
  PasswordsInputList,
} from './InputComponents';
import { SubmitButton } from './SubmitButton';
import { StyledErrorMessage, cardCreatorContainerStyle } from './CardCreator.styled';

export function CardCreator() {
  const cardContext = useCardContext();
  const cardContextApis = useCardContextApis();

  const { CardCompanySelectModal, showModal, hideModal } = useCardCompanySelectModal();

  const cardStateList = cardContext && [
    cardContext.cardNumbers,
    cardContext.expireDates,
    cardContext.cardOwners,
    cardContext.securityCodes,
    cardContext.passwords,
    cardContext.cardCompanies,
  ];
  useInvalidFinderOnMount(cardStateList);
  useSequentialAutoFocus(cardStateList);

  useAutoCompanyChecker(cardContext?.cardNumbers[0].value, cardContext?.cardNumbers[1].value);

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

  if (!cardContext) return null;
  const { cardCompanies, cardNumbers, cardOwners, expireDates, passwords, securityCodes } = cardContext;

  return (
    <ThemeSetter className={cardCreatorContainerStyle()} theme={cardCompanies[0].value?.theme}>
      <h2 className="page-title">
        <Link to={routes.home} className="mr-10">{`<`}</Link> 카드 추가
      </h2>

      <Card
        cardCompany={cardCompanies[0].value}
        cardExpireDate={expireDates?.map((expireDate) => expireDate.value)}
        cardNumbers={cardNumbers}
        cardOwnerName={cardOwners?.[0]?.value}
        additionalBottomElement={
          !cardCompanies[0].errorMessage ? (
            <StyledErrorMessage>{cardCompanies[0].errorMessage}</StyledErrorMessage>
          ) : undefined
        }
        onCardClick={handleCardClick}
      />

      <CardNumbersInputList cardNumbers={cardNumbers} />
      <ExpireDatesInputList expireDates={expireDates} />
      <CardOwnerInput cardOwners={cardOwners} />
      <SecurityCodesInputList securityCodes={securityCodes} />
      <PasswordsInputList passwords={passwords} />

      <SubmitButton />

      <CardCompanySelectModal onCardCompanyClick={handleCardCompanySelectModalClick} />
    </ThemeSetter>
  );
}
