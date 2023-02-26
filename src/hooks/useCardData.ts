import { useState } from 'react';
import type { CreditCardType, PartialCreditCardType } from 'types/CreditCard';

const initalData = {
  number: '',
  holderName: '',
  expiration: '',
  cvc: '',
  password: ['', '', '', ''],
};

const useCardData = () => {
  const [card, setCard] = useState<CreditCardType>(initalData);

  const changeCardInfo = (data: PartialCreditCardType) => {
    setCard((prev) => ({ ...prev, ...data }));
  };

  return {
    card,
    changeCardInfo,
  };
};

export default useCardData;

const test = <T>(data: T) => {};
