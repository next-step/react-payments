import { useContext } from 'react';
import { CardInfoContext } from './CardInfoProvider';

const useCardContext = () => {
  return useContext(CardInfoContext);
};

export default useCardContext;
