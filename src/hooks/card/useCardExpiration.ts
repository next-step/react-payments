import { isValidExpirationMonth } from '@/domain/card';
import { isNumber } from '@/utils';
import { ChangeEvent, useState } from 'react';

export default function useCardExpiration() {
  const [cardExpiration, setCardExpiration] = useState({
    month: '',
    year: '',
  });

  const handleChangeExpiration = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(value);

    if (!isNumber(value) && value !== '') return;

    if (!isValidExpirationMonth(value)) return;

    setCardExpiration((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { cardExpiration, handleChangeExpiration };
}
