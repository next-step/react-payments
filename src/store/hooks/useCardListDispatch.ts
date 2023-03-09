import { useContext } from 'react';
import { CardListContext } from '../CardListContext';

const useCardListDispatch = () => {
  const context = useContext(CardListContext);
  if (!context) {
    throw new Error('useDispatch must be used within a CardListProvider');
  }
  return context[1];
};

export default useCardListDispatch;
