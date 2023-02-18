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

  const handleChangeCardNumber: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.currentTarget;

    if (value !== '' && !isNumber(value)) {
      return;
    }

    setCardNumber((prevState) => ({ ...prevState, [name]: value }));
  };

  return { cardNumber, handleChangeCardNumber };
};

const isNumber = (value: string) => /^\d+$/.test(value);

export default useCardNumber;
