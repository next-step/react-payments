import { useCallback } from 'react';
import { useCardState } from '../../../hooks/useCardState';

const EXPIRATION_MAX_LENGTH = 2;
const MAX_MONTH = 12;

const useCardExpiration = () => {
  const { cardState, setCardState } = useCardState();

  const handleExpirationDate = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;

      const isNumber = !Number.isNaN(Number(value));
      if (!isNumber || value.length > EXPIRATION_MAX_LENGTH) return;
      if (name === 'month' && Number(value) > MAX_MONTH) return;

      setCardState((prev) => ({
        ...prev,
        expiration: { ...prev.expiration, [name]: value },
      }));
    },
    [setCardState]
  );

  return {
    expiration: cardState.expiration,
    handleExpirationDate,
  };
};

export default useCardExpiration;
