import { ChangeEvent, useState } from 'react';

import { isValidExpirationMonth, isValidExpirationYear } from '@/domain/card';
import { isNumber } from '@/utils';
import { CARD } from '@/constants/card';

export default function useCardExpiration() {
  const [cardExpiration, setCardExpiration] = useState({
    month: '',
    year: '',
  });

  const cardExpirationsLength = Object.values(cardExpiration).map((expiration) => expiration.length);
  const 만료일이모두입력된 = cardExpirationsLength.every((length) => length === CARD.EXPIRATION.LENGTH);

  const handleChangeExpiration = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (!(name in cardExpiration)) {
      throw new Error(`input element에 지정되지 않은 name이 주입되었습니다. [injected name with '${name}']`);
    }

    if (!isNumber(value) && value !== '') {
      return;
    }

    if (name === 'month' && !isValidExpirationMonth(value)) {
      return;
    }
    if (name === 'year' && !isValidExpirationYear(value)) {
      return;
    }

    setCardExpiration((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { cardExpiration, 만료일이모두입력된, handleChangeExpiration };
}
