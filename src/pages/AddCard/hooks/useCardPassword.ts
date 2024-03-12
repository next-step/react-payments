import { useCallback } from 'react';
import { useCardState } from '../../../providers/CardState/hooks/useCardState';

const PASSWORD_INPUT_MAX_LENGTH = 2;
const useCardPassword = () => {
  const { cardState, setCardState } = useCardState();

  const handlePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;

      const isNumber = !Number.isNaN(Number(value));
      if (!isNumber || value.length > PASSWORD_INPUT_MAX_LENGTH) return;

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
