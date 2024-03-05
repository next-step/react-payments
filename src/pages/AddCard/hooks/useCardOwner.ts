import { useCallback } from 'react';
import { useCardState } from '../../../hooks/useCardState';

const useCardOwner = () => {
  const { cardState, setCardState } = useCardState();

  const handleOwner = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCardState((prev) => ({
        ...prev,
        owner: e.target.value,
      }));
    },
    [setCardState]
  );

  return {
    owner: cardState.owner,
    handleOwner,
  };
};

export default useCardOwner;
