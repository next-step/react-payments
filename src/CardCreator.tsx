import React, { useState } from 'react';
import { styled } from '@stitches/react';
import { Link } from 'react-router-dom';

import { routes } from '@/routes';
import Card from './Card';
import { cardNumbersInit, expireDatesInit, passwordsInit } from './CardCreatorInits';
import { CardNumberInput } from './CardNumberInput';
import useExtendedState from './hooks/useExtendedState';
import ExpireDateInput from './ExpireDateInput';
import CardOwnerInput from './CardOwnerInput';
import PasswordInput from './PasswordInput';
import { SecurityCodeInput } from './SecurityCodeInput';

function CardCreator() {
  const cardNumbersStateBundle = useExtendedState(cardNumbersInit);
  const [cardNumbers] = cardNumbersStateBundle;

  const expireDatesStateBundle = useExtendedState(expireDatesInit);
  const [expireDates] = expireDatesStateBundle;

  const cardOwnerNameStateBundle = useState<string>();
  const [ownerName] = cardOwnerNameStateBundle;

  const securityCodeStateBundle = useState<string>();

  const passwordsStateBundle = useExtendedState(passwordsInit);

  // 클린코드를 위한 의견!
  // TODO: 모든 input을 받아 i번의 다음으로 넘기는 부분은 공통 hook으로 묶을 수 있겠다.
  // TODO: useForm처럼 form을 간단하게 만들 수 있는 방법은 없을까?
  // input들을 children에 받고 그것을 읽어서 value와 onChange를 알아서 이어주는 식으로 가능할 것이다. 하지만 그게 꼭 필요할까?
  // 우선은 구현 먼저 ㅇㅇ

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
              ownerName={ownerName}
            />
          </div>
          <CardNumberInput cardNumbersStateBundle={cardNumbersStateBundle} />
          <ExpireDateInput expireDatesStateBundle={expireDatesStateBundle} />
          <CardOwnerInput cardOwnerNameStateBundle={cardOwnerNameStateBundle} />
          <SecurityCodeInput cardOwnerNameStateBundle={securityCodeStateBundle} />
          <PasswordInput passwordsStateBundle={passwordsStateBundle} />
          <div className="button-box">
            <span className="button-text">다음</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardCreator;
