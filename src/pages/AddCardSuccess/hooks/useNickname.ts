import { useCallback } from 'react';
import { useCardState } from '../../../providers/CardState/hooks/useCardState';

const useCardNickname = () => {
  const { cardState, setCardState } = useCardState();

  const handleNickname = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setCardState((prev) => ({
        ...prev,
        nickname: value,
      }));
    },
    [setCardState]
  );

  return {
    brand: cardState.brand,
    nickname: cardState.nickname,
    handleNickname,
  };
};

export default useCardNickname;
