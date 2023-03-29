import { useContext } from 'react';

import { CardApiContext, CardContext } from './cardContext';

export function useCardContext() {
  return useContext(CardContext);
}

export function useCardContextApi() {
  return useContext(CardApiContext);
}
