import React, { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '@/routes';
import Card from '@/components/Card';

import { createCardStateSetter } from './utils';
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

function CardCreator() {
  const [cardNumbers, setCardNumbers] = useState(cardNumbersInit);
  const [expireDates, setExpireDate] = useState(expireDatesInit);
  const [ownerNames, setOwnerNames] = useState(cardOwnersInit);
  const [securityCodes, setSecurityCodes] = useState(securityCodesInit);
  const [passwords, setPasswords] = useState(passwordsInit);

  const cardNumberInputRef = useRef<CardNumberInputRef>(null);
  const expireDateInputRef = useRef<ExpireDateInputRef>(null);
  const cardOwnerInputRef = useRef<CardOwnerInputRef>(null);
  const securityCodeInputRef = useRef<SecurityCodeInputRef>(null);
  const passwordInputRef = useRef<PasswordInputRef>(null);

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
        createCardNumberSetter={useMemo(() => createCardStateSetter(setCardNumbers), [setCardNumbers])}
      />
      <ExpireDateInputPure
        ref={expireDateInputRef}
        expireDates={expireDates}
        createExpireDateSetter={useMemo(() => createCardStateSetter(setExpireDate), [setExpireDate])}
      />
      <CardOwnerInputPure
        ref={cardOwnerInputRef}
        ownerNames={ownerNames}
        createOwnerNameSetter={useMemo(() => createCardStateSetter(setOwnerNames), [setOwnerNames])}
      />
      <SecurityCodeInputPure
        ref={securityCodeInputRef}
        securityCodes={securityCodes}
        createSecurityCodeSetter={useMemo(() => createCardStateSetter(setSecurityCodes), [setSecurityCodes])}
      />
      <PasswordInputPure
        ref={passwordInputRef}
        passwords={passwords}
        createPasswordSetter={useMemo(() => createCardStateSetter(setPasswords), [setPasswords])}
      />
      <div className="button-box">
        <Link
          to="/add-complete"
          className="button-text"
          onClick={(e) => {
            const inputs = [
              { state: cardNumbers, ref: cardNumberInputRef },
              { state: expireDates, ref: expireDateInputRef },
              { state: ownerNames, ref: cardOwnerInputRef },
              { state: securityCodes, ref: securityCodeInputRef },
              { state: passwords, ref: passwordInputRef },
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
