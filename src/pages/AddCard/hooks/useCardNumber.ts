import { useCallback } from 'react';
import { useCardState } from '../../../hooks/useCardState';

const useCardNumber = () => {
  const { cardState, setCardState } = useCardState();

  const handleNumbers = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;

      const isNumber = !Number.isNaN(Number(value));
      if (!isNumber || value.length > 4) return;

      setCardState((prev) => ({
        ...prev,
        numbers: { ...prev.numbers, [name]: value },
      }));
    },
    [setCardState]
  );

  return {
    cardNumber: cardState.numbers,
    handleNumbers,
  };
};

export default useCardNumber;
