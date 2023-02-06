import { useState } from 'react';
import { 카드_필드_에러_초깃값 } from '@/constants';

const useCardFieldError = () => {
  const [
    [
      cardNumberError,
      cardExpirationError,
      cardOwnerError,
      cardSecurityCodeError,
      cardPasswordError,
    ],
    setFieldError,
  ] = useState(카드_필드_에러_초깃값);

  const setCardNumberError = (isValid: boolean) => {
    setFieldError((prev) => {
      const next = [...prev];
      next[0] = isValid;
      return next;
    });
  };

  const setCardExpirationError = (isValid: boolean) => {
    setFieldError((prev) => {
      const next = [...prev];
      next[1] = isValid;
      return next;
    });
  };

  const setCardOwnerError = (isValid: boolean) => {};

  const setCardSecurityCodeError = (isValid: boolean) => {
    setFieldError((prev) => {
      const next = [...prev];
      next[3] = isValid;
      return next;
    });
  };

  const setCardPasswordError = (isValid: boolean) => {
    setFieldError((prev) => {
      const next = [...prev];
      next[4] = isValid;
      return next;
    });
  };

  return {
    error: {
      cardNumberError,
      cardExpirationError,
      cardOwnerError,
      cardSecurityCodeError,
      cardPasswordError,
    },
    set: {
      cardNumberError: setCardNumberError,
      cardExpirationError: setCardExpirationError,
      cardOwnerError: setCardOwnerError,
      cardSecurityCodeError: setCardSecurityCodeError,
      cardPasswordError: setCardPasswordError,
    },
  };
};

export default useCardFieldError;
