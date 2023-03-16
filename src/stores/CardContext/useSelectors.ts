import { useContext } from 'react';

import { ApiContext, CardContext } from './cardStore';

export function useCardSelector() {
  return useContext(CardContext);
}

export function useCardContextApiSelector() {
  return useContext(ApiContext);
}
