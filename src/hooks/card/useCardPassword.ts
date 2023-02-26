import { useState, ChangeEvent } from 'react';

import { CARD } from '@/constants/card';
import { validateCardPassword } from '@/domain/card/validation';

export default function useCardPassword() {
  const [cardPassword, setCardPassword] = useState({
    num1: '',
    num2: '',
  });
  const cardPasswordsLength = Object.values(cardPassword).map((password) => password.length);
  const 카드비밀번호가모두입력된 = cardPasswordsLength.every((length) => length === CARD.PASSWORD.LENGTH);

  const handleChangeCardPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    validateCardPassword({ name, value, cardPassword });

    setCardPassword((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { cardPassword, 카드비밀번호가모두입력된, handleChangeCardPassword };
}
