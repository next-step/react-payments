import { useContext } from 'react';
import { CardListContext } from '../CardListContext';

const useCardList = () => {
  const context = useContext(CardListContext);
  if (!context) {
    throw new Error('useCardList must be used within a CardListProvider');
  }
  return context[0];
};

export default useCardList;
