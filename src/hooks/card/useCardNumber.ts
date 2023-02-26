import { useState, ChangeEvent } from 'react';

import { CARD } from '@/constants/card';
import { validateCardNumber } from '@/domain/card/validation';

export default function useCardNumber() {
  const [cardNumber, setCardNumber] = useState({
    num1: '',
    num2: '',
    num3: '',
    num4: '',
  });
  const cardNumbersLength = Object.values(cardNumber).map((num) => num.length);
  const 카드번호가모두입력된 = cardNumbersLength.every((length) => length === CARD.NUMBER.LENGTH);

  const handleChangeCardNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    validateCardNumber({ name, value, cardNumber });

    setCardNumber((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { cardNumber, 카드번호가모두입력된, handleChangeCardNumber };
}
