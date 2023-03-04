import { useState } from 'react';

import { CardCompanies, DEFAULT_CARD_COMPANY } from 'constants/Card';
import type { CreditCardType, PartialCreditCardType } from 'types/CreditCard';

const initalData: CreditCardType = {
  id: 1,
  number: '',
  holderName: '',
  expiration: '',
  cvc: '',
  password: ['', '', '', ''],
  nickname: DEFAULT_CARD_COMPANY,
  color: CardCompanies[DEFAULT_CARD_COMPANY],
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
