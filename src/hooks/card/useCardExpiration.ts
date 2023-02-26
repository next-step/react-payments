import { ChangeEvent, useState } from 'react';

import { CARD } from '@/constants/card';
import { validateCardExpiration } from '@/domain/card/validation';

export default function useCardExpiration() {
  const [cardExpiration, setCardExpiration] = useState({
    month: '',
    year: '',
  });

  const cardExpirationsLength = Object.values(cardExpiration).map((expiration) => expiration.length);
  const 만료일이모두입력된 = cardExpirationsLength.every((length) => length === CARD.EXPIRATION.LENGTH);

  const handleChangeExpiration = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    validateCardExpiration({ name, value, cardExpiration });

    setCardExpiration((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { cardExpiration, 만료일이모두입력된, handleChangeExpiration };
}
