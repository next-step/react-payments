import { useContext } from 'react';
import { CardContext } from '../providers/CardState/CardStateProvider';

export const useCardState = () => {
  const context = useContext(CardContext);

  if (context === undefined) {
    throw new Error('useCardState must be used within a CardStateProvider');
  }

  return context;
};
