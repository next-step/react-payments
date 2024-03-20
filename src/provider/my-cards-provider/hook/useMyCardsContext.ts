import { useContext } from 'react';
import { MyCardsContext } from '../MyCardsProvider';

const useMyCardsContext = () => {
  const myCardsContext = useContext(MyCardsContext);
  if (!myCardsContext) {
    return null;
  }
  return myCardsContext;
};

export default useMyCardsContext;
