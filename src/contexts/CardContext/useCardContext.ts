import { useContext } from 'react';

import { CardApiContext, CardContext } from './cardContext';

export function useCardContext() {
  return useContext(CardContext);
}

export function useCardContextApis() {
  return useContext(CardApiContext);
}
