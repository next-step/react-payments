import { useState } from 'react';

import type { CardNumber } from 'types/card';

const INITIAL_STATE: CardNumber = {
  num1: '',
  num2: '',
  num3: '',
  num4: '',
};

const useCardNumber = () => {
  const [cardNumber, setCardNumber] = useState(INITIAL_STATE);

  const updateCardNumber = (name: string, value: string) => {
    if (value !== '' && !isNumber(value)) {
      return;
    }

    setCardNumber((prevState) => ({ ...prevState, [name]: value }));
  };

  return { cardNumber, updateCardNumber };
};

const isNumber = (value: string) => /^\d+$/.test(value);

export default useCardNumber;
