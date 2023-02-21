import { useState, ChangeEvent } from 'react';

import { isNumber } from '@/utils';
import { CARD } from '@/constants/card';

export default function useCardPassword() {
  const [cardPassword, setCardPassword] = useState({
    num1: '',
    num2: '',
  });
  const cardPasswordsLength = Object.values(cardPassword).map((password) => password.length);
  const 카드비밀번호가모두입력된 = cardPasswordsLength.every((length) => length === CARD.PASSWORD.LENGTH);

  const handleChangeCardPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (!(name in cardPassword)) {
      throw new Error(`input element에 지정되지 않은 name이 주입되었습니다. [injected name with '${name}']`);
    }
    if (!isNumber(value) && value !== '') {
      return;
    }

    setCardPassword((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { cardPassword, 카드비밀번호가모두입력된, handleChangeCardPassword };
}
