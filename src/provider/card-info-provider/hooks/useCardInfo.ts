import { CardStateType } from '@/domain/type';
import { useCallback, useState } from 'react';

const useCardInfo = () => {
  const [cardState, setCardState] = useState<CardStateType>({});

  const handleCardState = useCallback((data: CardStateType) => {
    setCardState((prev) => ({ ...prev, ...data }));
  }, []);

  const reset = () => setCardState({});

  return { cardState, handleCardState, reset };
};
export default useCardInfo;
