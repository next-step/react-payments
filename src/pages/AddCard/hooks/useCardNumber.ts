import { useCallback } from 'react';
import { useCardState } from '../../../hooks/useCardState';

const CARD_NUMBER_MAX_LENGTH = 4;

const useCardNumber = () => {
  const { cardState, setCardState } = useCardState();

  const handleNumbers = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;

      const isNumber = !Number.isNaN(Number(value));
      if (!isNumber || value.length > CARD_NUMBER_MAX_LENGTH) return;

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
