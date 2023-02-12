import { 카드_입력칸_유효성_초깃값 } from '@/constants';
import { condIndicator } from '@/utils';
import { useState } from 'react';

const useInputsValid = () => {
  const [
    [cardNumberIndicator1, cardNumberIndicator2, cardNumberIndicator3, cardExpirationIndicator1],
    setInputsValid,
  ] = useState(카드_입력칸_유효성_초깃값);

  const setInputValid = (index: number, isValid: boolean) => {
    setInputsValid((prev) => {
      const next = [...prev];
      next[index] = isValid;
      return next;
    });
  };

  return {
    indicator: {
      number1: condIndicator(cardNumberIndicator1),
      number2: condIndicator(cardNumberIndicator2),
      number3: condIndicator(cardNumberIndicator3),
      expiration: condIndicator(cardExpirationIndicator1, ' / '),
    },
    setInputValid,
  };
};

export default useInputsValid;
