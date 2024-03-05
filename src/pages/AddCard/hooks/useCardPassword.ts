import { useCallback } from 'react';
import { useCardState } from '../../../hooks/useCardState';

const useCardPassword = () => {
  const { cardState, setCardState } = useCardState();

  const handlePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;

      const isNumber = !Number.isNaN(Number(value));
      if (!isNumber || value.length > 1) return;

      setCardState((prev) => ({
        ...prev,
        password: { ...prev.password, [name]: value },
      }));
    },
    [setCardState]
  );

  return {
    password: cardState.password,
    handlePassword,
  };
};

export default useCardPassword;
