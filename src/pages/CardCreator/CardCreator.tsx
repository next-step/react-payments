import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '@/routes';
import Card from '@/components/Card';
import useExtendedState from '@/hooks/useExtendedState';

import { CardNumberInput, CardOwnerInput, ExpireDateInput, PasswordInput, SecurityCodeInput } from './InputComponents';
import { cardNumbersInit, expireDatesInit, passwordsInit, cardOwnersInit, securityCodesInit } from './CardCreatorInits';

// TODO: rendering 최적화 적용하기.
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
            {/* TODO: 넘어가기 전에 모든 state들의 validation 필요 */}
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
