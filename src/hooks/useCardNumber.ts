import { ChangeEvent, useState } from 'react';

import { isNumber } from '@/utils';

export default function useCardNumber() {
  const [cardNumber, setCardNumber] = useState({
    num1: '',
    num2: '',
    num3: '',
    num4: '',
  });

  const handleChangeCardNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (!isNumber(value) && value !== '') return;

    setCardNumber((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { cardNumber, handleChangeCardNumber };
}
