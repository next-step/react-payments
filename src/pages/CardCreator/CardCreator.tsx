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

  const securityCodesStateBundle = useExtendedState(securityCodesInit);
  const [securityCodes] = securityCodesStateBundle;

  const passwordsStateBundle = useExtendedState(passwordsInit);
  const [passwords] = passwordsStateBundle;

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
          ownerName={ownerName[0].value}
        />
      </div>
      <CardNumberInput cardNumbersStateBundle={cardNumbersStateBundle} />
      <ExpireDateInput expireDatesStateBundle={expireDatesStateBundle} />
      <CardOwnerInput cardOwnerNameStateBundle={cardOwnerNameStateBundle} />
      <SecurityCodeInput cardOwnerNameStateBundle={securityCodesStateBundle} />
      <PasswordInput passwordsStateBundle={passwordsStateBundle} />
      <div className="button-box">
        <Link
          to="/add-complete"
          className="button-text"
          onClick={(e) => {
            // TODO: 안된 input을 찾아 focus해주는 기능으로 UX 향상 가능. useRef로 담은 element와 연동
            const isAllValid = [cardNumbers, expireDates, ownerName, securityCodes, passwords].some((states) => {
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
