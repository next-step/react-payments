import { useContext } from 'react';
import { CardStateContext } from '../CardProvider';

export default function useCardState() {
  const context = useContext(CardStateContext);
  if (!context) {
    throw new Error('useCardState 훅은 CardProvider 내부에서 사용해야 합니다.');
  }
  return useContext(CardStateContext);
}
