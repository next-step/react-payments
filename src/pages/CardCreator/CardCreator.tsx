import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '@/routes';
import Card from '@/components/Card';
import useExtendedState from '@/hooks/useExtendedState';

import { CardNumberInput, CardOwnerInput, ExpireDateInput, PasswordInput, SecurityCodeInput } from './InputComponents';
import { cardNumbersInit, expireDatesInit, passwordsInit, cardOwnersInit, securityCodesInit } from './CardCreatorInits';

function CardCreator() {
  // FIXME: 전권을 넘겨주는 것 보다는 제한된 권한을 넘겨주는 것이 좋을 것 같다.
  const cardNumbersStateBundle = useExtendedState(cardNumbersInit);
  const [cardNumbers] = cardNumbersStateBundle;

  const expireDatesStateBundle = useExtendedState(expireDatesInit);
  const [expireDates] = expireDatesStateBundle;

  const cardOwnerNameStateBundle = useExtendedState(cardOwnersInit);
  const [ownerName] = cardOwnerNameStateBundle;

  const securityCodeStateBundle = useExtendedState(securityCodesInit);

  const passwordsStateBundle = useExtendedState(passwordsInit);

  // 클린코드와 추상화를 위한 의견!
  // TODO: 모든 input을 받아 i번의 다음으로 focus를 넘기는 부분은 공통 hook으로 묶을 수 있겠다.
  // TODO: useForm처럼 form을 간단하게 만들 수 있는 방법은 없을까? -> [{}] state를 기준으로 input에 여러 event 함수들을 미리 preset하고 input을 전달해주면 좋을듯 하다.

  // TODO: 카드 소유자는 컴포넌트로 빼기
  // TODO: 카드 소유자 modal은 portal이용해서 관심사 분리

  return (
    <>
      <h2>1️⃣ 카드 추가</h2>
      <div className="root">
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
              ownerName={ownerName[0].value}
            />
          </div>
          <CardNumberInput cardNumbersStateBundle={cardNumbersStateBundle} />
          <ExpireDateInput expireDatesStateBundle={expireDatesStateBundle} />
          <CardOwnerInput cardOwnerNameStateBundle={cardOwnerNameStateBundle} />
          <SecurityCodeInput cardOwnerNameStateBundle={securityCodeStateBundle} />
          <PasswordInput passwordsStateBundle={passwordsStateBundle} />
          <div className="button-box">
            <Link to="/add-complete" className="button-text">
              다음
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export { CardCreator };
