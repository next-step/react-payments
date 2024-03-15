import { useContext } from 'react';

import { CardsContext } from '../../context/CardsProvider';

export const useCardsContext = () => {
  const context = useContext(CardsContext);

  if (!context) {
    throw new Error('Cannot find CardContext');
  }

  return context;
};
