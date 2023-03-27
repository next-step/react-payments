import { useContext } from 'react';

import { ApiContext, CardContext } from './cardContext';

export function useCardContext() {
  return useContext(CardContext);
}

export function useCardApiContext() {
  return useContext(ApiContext);
}
