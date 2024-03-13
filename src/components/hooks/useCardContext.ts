import { useContext } from 'react';

import { CardContext } from '../../context/CardProvider';

export const useCardContext = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error('Cannot find CardContext');
  }

  return context;
};
