import React, { useCallback, useMemo } from 'react';
import {
  isValidCardNumber,
  isValidExpiredMonth,
  isValidExpiredYear,
  isValidOwner,
  isValidCvc,
  isValidPin,
} from '../../../domain/payments/validator';
import { TCardEditProperties, TCardEditRefs } from '../types';

type THookValidator = TCardEditProperties & TCardEditRefs;

export default ({ cardNumbers, expiredMonth, expiredYear, owner, cvc, pin, refs }: THookValidator) => {
  const inputs = [cardNumbers, expiredMonth, expiredYear, owner, cvc, pin];

  const validations: { [key: string]: [boolean, React.RefObject<HTMLInputElement | HTMLButtonElement>, string] } =
    useMemo(
      () => ({
        cardNumbers: [
          isValidCardNumber(cardNumbers),
          refs.cardNumber,
          '카드번호가 올바르게 입력되었는지 확인해 주세요',
        ],
        expired: [
          isValidExpiredMonth(expiredMonth) && isValidExpiredYear(expiredYear),
          refs.expired,
          '만료 연/월이 올바르게 입력되었는지 확인해 주세요',
        ],
        owner: [isValidOwner(owner), refs.owner, '소유자 이름이 올바르게 입력되었는지 확인해 주세요'],
        cvc: [isValidCvc(cvc), refs.cvc, 'CVC가 올바르게 입력되었는지 확인해 주세요'],
        pin: [isValidPin(pin), refs.pin, '비밀번호 앞 2자리가 올바르게 입력되었는지 확인해 주세요'],
      }),
      [...inputs, refs]
    );
  const isValid = useMemo(() => Object.values(validations).every(([isValid]) => isValid), [...inputs]);

  const getValidationCaption = useCallback(
    (key: string) => {
      const validation = validations[key];
      if (!validation) throw new Error('올바르지 않은 속성 값을 입력하셨습니다');

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [isValid, _, message] = validation;
      return isValid ? '' : message;
    },
    [...inputs, refs]
  );

  return { validations, isValid, getValidationCaption };
};
