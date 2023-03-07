import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ErrorApiContext } from '@/stores/ErrorContext';
import {
  useSelectCardNumbers,
  useSelectExpireDates,
  useSelectCardOwners,
  useSelectPasswords,
  useSelectSecurityCodes,
} from '@/stores/cardCreator';

interface SubmitButtonProps {}

// TODO: key값들 const로 정돈하기
export function SubmitButton(_: SubmitButtonProps) {
  const cardNumbersStore = useSelectCardNumbers();
  const expireDatesStore = useSelectExpireDates();
  const cardOwnersStore = useSelectCardOwners();
  const passwordsStore = useSelectPasswords();
  const securityCodesStore = useSelectSecurityCodes();

  const inputs = [
    createInputObject('cardNumbers', cardNumbersStore),
    createInputObject('expireDates', expireDatesStore),
    createInputObject('cardOwners', cardOwnersStore),
    createInputObject('passwords', passwordsStore),
    createInputObject('securityCodes', securityCodesStore),
  ];

  const errorApis = useContext(ErrorApiContext);

  return (
    <div className="button-box">
      <Link
        to="/add-complete"
        className="button-text"
        onClick={(e) => {
          const error = inputs.find(({ store }) => {
            return store?.some(({ value, checkIsValid }) => !checkIsValid(value));
          });

          if (error) {
            e.preventDefault();

            const errorType = error.type;
            errorApis?.dispatch({ type: errorType, message: null });
            alert('카드 정보들을 모두 올바르게 입력해주세요!');
          }
        }}
      >
        다음
      </Link>
    </div>
  );
}

function createInputObject<T>(type: string, store: T): { type: string; store: T } {
  return { type, store };
}
