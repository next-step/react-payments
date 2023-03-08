import React, { MouseEvent, useContext } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '@/routes';
import { ErrorApiContext } from '@/stores/ErrorContext';
import {
  useSelectCardNumbers,
  useSelectExpireDates,
  useSelectCardOwners,
  useSelectPasswords,
  useSelectSecurityCodes,
  useSelectCardCompany,
} from '@/stores/CardCreatorContext';

interface SubmitButtonProps {}

// TODO: key값들 const로 정돈하기
export function SubmitButton(_: SubmitButtonProps) {
  const errorApis = useContext(ErrorApiContext);

  const cardCompany = useSelectCardCompany();
  const cardNumbersStore = useSelectCardNumbers();
  const expireDatesStore = useSelectExpireDates();
  const cardOwnersStore = useSelectCardOwners();
  const passwordsStore = useSelectPasswords();
  const securityCodesStore = useSelectSecurityCodes();

  const inputs = [
    createInputObject('cardCompany', cardCompany),
    createInputObject('cardNumbers', cardNumbersStore),
    createInputObject('expireDates', expireDatesStore),
    createInputObject('cardOwners', cardOwnersStore),
    createInputObject('passwords', passwordsStore),
    createInputObject('securityCodes', securityCodesStore),
  ];

  // select된 inputState가 변하면 아래 함수도 새로 만들어져야 하므로, useCallback은 적용하지 않음.
  const handleSubmitButtonClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const error = inputs.find(({ store }) => {
      if (Array.isArray(store)) {
        return store?.some(({ value, checkIsValid }) => !checkIsValid(value));
      }
      return !store?.checkIsValid(store.value);
    });

    if (error) {
      e.preventDefault();

      const errorType = error.type;
      errorApis?.dispatch({ type: errorType, message: null });
      alert('카드 정보들을 모두 올바르게 입력해주세요!');
    }
  };

  return (
    <div className="button-box">
      <Link to={routes.createCardNickname()} className="button-text" onClick={handleSubmitButtonClick}>
        다음
      </Link>
    </div>
  );
}

function createInputObject<T>(type: string, store: T): { type: string; store: T } {
  return { type, store };
}
