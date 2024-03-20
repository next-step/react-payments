import { useContext } from 'react';
import { CardInfoContext } from '../CardInfoProvider';

const useCardContext = () => {
  const cardInfoContext = useContext(CardInfoContext);
  if (!cardInfoContext) {
    throw new Error('카드 정보 컨텍스트 입니다!');
  }

  return useContext(CardInfoContext);
};

export default useCardContext;
