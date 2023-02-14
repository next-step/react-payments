import { useState, ChangeEvent } from 'react';

export default function useCardOwnerName() {
  const [cardOwnerName, setCardOwnerName] = useState('');

  const handleChangeCardOwnerName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setCardOwnerName(value);
  };

  return { cardOwnerName, handleChangeCardOwnerName };
}
