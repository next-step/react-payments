import { useContext } from 'react';
import { CardInfoContext } from '../CardInfoProvider';

const useCardContext = () => {
  const cardInfoContext = useContext(CardInfoContext);
  if (!cardInfoContext) {
    return null;
  }
  return cardInfoContext;
};

export default useCardContext;
