import { useContext } from 'react';
import { MyCardsContext } from '../MyCardsProvider';

const useMyCardsContext = () => {
  const myCardsContext = useContext(MyCardsContext);
  if (!myCardsContext) {
    throw new Error('카드 리스트 컨텍스트 입니다!');
  }
  return myCardsContext;
};

export default useMyCardsContext;
