import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '@/routes';
import { Card } from '@/components/Card';
import { ThemeProvider } from '@/components/ThemeProvider';

import {
  CardNumberInputPure,
  CardOwnerInputPure,
  ExpireDateInputPure,
  PasswordInputPure,
  SecurityCodeInputPure,
} from './InputComponents';
import type {
  CardNumberInputRef,
  CardOwnerInputRef,
  ExpireDateInputRef,
  PasswordInputRef,
  SecurityCodeInputRef,
} from './InputComponents';
import { cardNumbersInit, expireDatesInit, passwordsInit, cardOwnersInit, securityCodesInit } from './CardCreatorInits';
import { useInputComponent } from './hooks/useInputComponent';
import { useCardCompanySelectModal } from './hooks/useCardCompanySelectModal';
import { CardCompanyModel } from './hooks/useCardCompanySelectModal/CardCompanySelector/cardCompanyList';

function CardCreator() {
  const [cardNumbers, createCardNumberSetter, cardNumberInputRef, cardNumberValidator] =
    useInputComponent<CardNumberInputRef>(cardNumbersInit);
  const [expireDates, createExpireDateSetter, expireDateInputRef, expireDateValidator] =
    useInputComponent<ExpireDateInputRef>(expireDatesInit);
  const [ownerNames, createOwnerNameSetter, cardOwnerInputRef, ownerNameValidator] =
    useInputComponent<CardOwnerInputRef>(cardOwnersInit);
  const [securityCodes, createSecurityCodeSetter, securityCodeInputRef, securityCodesValidator] =
    useInputComponent<SecurityCodeInputRef>(securityCodesInit);
  const [passwords, createPasswordSetter, passwordInputRef, passwordsValidator] =
    useInputComponent<PasswordInputRef>(passwordsInit);

  const [cardCompany, setCardCompany] = useState<CardCompanyModel | undefined>();

  const { CardCompanySelectModal, showModal, hideModal } = useCardCompanySelectModal();

  return (
    <ThemeProvider className="app" theme={cardCompany?.theme}>
      <h2 className="page-title">
        <Link to={routes.home} className="mr-10">{`<`}</Link> 카드 추가
      </h2>

      <Card
        cardCompany={cardCompany}
        cardNumbers={cardNumbers.map(({ type, value }) => ({
          isHide: type === 'password',
          value,
        }))}
        expireDates={expireDates.map(({ value }) => value)}
        ownerName={ownerNames[0].value}
        onCardClick={(e) => {
          e.stopPropagation();
          showModal();
        }}
      />

      <CardNumberInputPure
        ref={cardNumberInputRef}
        cardNumbers={cardNumbers}
        createCardNumberSetter={createCardNumberSetter}
      />
      <ExpireDateInputPure
        ref={expireDateInputRef}
        expireDates={expireDates}
        createExpireDateSetter={createExpireDateSetter}
      />
      <CardOwnerInputPure
        ref={cardOwnerInputRef}
        ownerNames={ownerNames}
        createOwnerNameSetter={createOwnerNameSetter}
      />
      <SecurityCodeInputPure
        ref={securityCodeInputRef}
        securityCodes={securityCodes}
        createSecurityCodeSetter={createSecurityCodeSetter}
      />
      <PasswordInputPure ref={passwordInputRef} passwords={passwords} createPasswordSetter={createPasswordSetter} />
      <div className="button-box">
        <Link
          to="/add-complete"
          className="button-text"
          onClick={(e) => {
            const inputs = [
              cardNumberValidator,
              expireDateValidator,
              ownerNameValidator,
              securityCodesValidator,
              passwordsValidator,
            ];
            inputs.forEach((states) => states.ref?.current?.setErrorMessage('none'));

            const errorIndex = inputs.findIndex((states) => {
              return !states.state.every(({ value, checkIsValid }) => checkIsValid(value));
            });

            if (errorIndex >= 0) {
              inputs[errorIndex].ref?.current?.setErrorMessage('inValid');
              e.preventDefault();
              alert('카드 정보들을 모두 올바르게 입력해주세요!');
            }
          }}
        >
          다음
        </Link>
      </div>
      <CardCompanySelectModal
        onCardCompanyClick={(cardCompany) => {
          setCardCompany(cardCompany);
          hideModal();
        }}
      />
    </ThemeProvider>
  );
}

export { CardCreator };
