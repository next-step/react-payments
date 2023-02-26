import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '@/routes';
import Card from '@/components/Card';

import { createCardStateSetter } from './utils';
import { CardNumberInput, CardOwnerInput, ExpireDateInput, PasswordInput, SecurityCodeInput } from './InputComponents';
import { cardNumbersInit, expireDatesInit, passwordsInit, cardOwnersInit, securityCodesInit } from './CardCreatorInits';

// TODO: rendering 최적화 적용하기.
function CardCreator() {
  const [cardNumbers, setCardNumbers] = useState(cardNumbersInit);
  const [expireDates, setExpireDate] = useState(expireDatesInit);
  const [ownerNames, setOwnerNames] = useState(cardOwnersInit);
  const [securityCodes, setSecurityCodes] = useState(securityCodesInit);
  const [passwords, setPasswords] = useState(passwordsInit);

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
      <CardNumberInput
        cardNumbers={cardNumbers}
        createCardNumberSetter={useMemo(() => createCardStateSetter(setCardNumbers), [setCardNumbers])}
      />
      <ExpireDateInput
        expireDates={expireDates}
        createExpireDateSetter={useMemo(() => createCardStateSetter(setExpireDate), [setExpireDate])}
      />
      <CardOwnerInput
        ownerNames={ownerNames}
        createOwnerNameSetter={useMemo(() => createCardStateSetter(setOwnerNames), [setOwnerNames])}
      />
      <SecurityCodeInput
        securityCodes={securityCodes}
        createSecurityCodeSetter={useMemo(() => createCardStateSetter(setSecurityCodes), [setSecurityCodes])}
      />
      <PasswordInput
        passwords={passwords}
        createPasswordSetter={useMemo(() => createCardStateSetter(setPasswords), [setPasswords])}
      />
      <div className="button-box">
        <Link
          to="/add-complete"
          className="button-text"
          onClick={(e) => {
            // TODO: 안된 input을 찾아 focus해주는 기능으로 UX 향상 가능. useRef로 담은 element와 연동
            const isAllValid = [cardNumbers, expireDates, ownerNames, securityCodes, passwords].some((states) => {
              return states.some(({ value, checkIsValid }) => checkIsValid(value));
            });

            if (!isAllValid) {
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
