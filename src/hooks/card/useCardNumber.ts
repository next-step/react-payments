import { useState, ChangeEvent } from 'react';

import { isNumber } from '@/utils';
import { CARD } from '@/constants/card';

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

    if (!(name in cardNumber)) {
      throw new Error(`input element에 지정되지 않은 name이 주입되었습니다. [injected name with '${name}']`);
    }
    if (!isNumber(value) && value !== '') {
      return;
    }

    setCardNumber((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { cardNumber, 카드번호가모두입력된, handleChangeCardNumber };
}
