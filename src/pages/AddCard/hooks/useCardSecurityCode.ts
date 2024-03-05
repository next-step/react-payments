import { useCallback } from 'react';
import { useCardState } from '../../../hooks/useCardState';

const useCardSecurityCode = () => {
  const { cardState, setCardState } = useCardState();

  const handleSecurityCode = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      const isNumber = !Number.isNaN(Number(value));
      if (!isNumber || value.length > 3) return;

      setCardState((prev) => ({
        ...prev,
        securityCode: value,
      }));
    },
    [setCardState]
  );

  return {
    securityCode: cardState.securityCode,
    handleSecurityCode,
  };
};

export default useCardSecurityCode;
