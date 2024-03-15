import { useContext } from 'react';

import { CardsContext } from '../../context/CardsProvider';

export const useCardsContext = () => {
  const context = useContext(CardsContext);
  console.log(context.cardsState);

  if (!context) {
    throw new Error('Cannot find CardContext');
  }

  return context;
};
