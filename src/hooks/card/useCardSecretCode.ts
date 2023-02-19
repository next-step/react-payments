import { useState, ChangeEvent } from 'react';

import { isNumber } from '@/utils';
import { CARD } from '@/constants/card';

export default function useCardSecretCode() {
  const [cardSecretCode, setCardSecretCode] = useState('');

  const 카드CVC가모두입력된 = cardSecretCode.length === CARD.SECRET_CODE.LENGTH;

  const handleChangeCardSecretCode = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!isNumber(value) && value !== '') {
      return;
    }

    setCardSecretCode(value);
  };

  return { cardSecretCode, 카드CVC가모두입력된, handleChangeCardSecretCode };
}
