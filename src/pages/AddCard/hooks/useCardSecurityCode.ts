import { useCallback } from 'react';
import { useCardState } from '../../../providers/CardState/hooks/useCardState';

const SECURITY_CODE_MAX_LENGTH = 3;

const useCardSecurityCode = () => {
  const { cardState, setCardState } = useCardState();

  const handleSecurityCode = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      const isNumber = !Number.isNaN(Number(value));
      if (!isNumber || value.length > SECURITY_CODE_MAX_LENGTH) return;

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
