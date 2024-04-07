import { useContext } from 'react';
import { CardInfoContext } from '../CardInfoProvider';

const useCardContext = () => {
  const cardInfoContext = useContext(CardInfoContext);
  if (!cardInfoContext) {
    throw new Error('해당 Context는 CardInfoProvider 하위에서만 사용해주세요!');
  }

  return cardInfoContext;
};

export default useCardContext;
