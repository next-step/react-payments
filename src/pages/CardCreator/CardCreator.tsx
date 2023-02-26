import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '@/routes';
import { Card } from '@/components/Card';

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

  return (
    <div className="app">
      <h2 className="page-title">
        <Link to={routes.home} className="mr-10">{`<`}</Link> 카드 추가
      </h2>
      <div className="card-box">
        <Card
          cardNumbers={cardNumbers.map(({ type, value }) => ({
            isHide: type === 'password',
            value,
          }))}
          expireDates={expireDates.map(({ value }) => value)}
          ownerName={ownerNames[0].value}
        />
      </div>
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
    </div>
  );
}

export { CardCreator };
