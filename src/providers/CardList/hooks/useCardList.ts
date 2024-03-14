import { useContext } from 'react';
import { CardListContext } from '../CardListProvider';

export const useCardList = () => {
  const context = useContext(CardListContext);

  if (context === undefined) {
    throw new Error('useCardList must be used within a CardListProvider');
  }

  return context;
};
