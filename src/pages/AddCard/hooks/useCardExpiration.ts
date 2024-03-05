import { useCallback } from 'react';
import { useCardState } from '../../../hooks/useCardState';

const useCardExpiration = () => {
  const { cardState, setCardState } = useCardState();

  const handleExpirationDate = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;

      const isNumber = !Number.isNaN(Number(value));
      if (!isNumber || value.length > 2) return;
      if (name === 'month' && Number(value) > 12) return;

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
