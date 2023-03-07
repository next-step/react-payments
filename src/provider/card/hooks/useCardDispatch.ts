import { useContext } from 'react';
import { CardDispatchContext } from '../CardProvider';

export default function useCardDispatch() {
  const context = useContext(CardDispatchContext);
  if (!context) {
    throw new Error('useCardDispatch 훅은 CardProvider 내부에서 사용해야 합니다.');
  }
  return useContext(CardDispatchContext);
}
