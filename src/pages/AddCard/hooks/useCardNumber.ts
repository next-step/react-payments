import { useState } from 'react';

const useCardNumber = () => {
  const [cardNumber, setCardNumber] = useState<Record<string, string>>({
    firstFour: '',
    secondFour: '',
    thirdFour: '',
    fourthFour: '',
  });

  const handleNumbers = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    const isNumber = !Number.isNaN(Number(value));
    if (!isNumber || value.length > 4) return;

    setCardNumber((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    cardNumber,
    handleNumbers,
  };
};

export default useCardNumber;
