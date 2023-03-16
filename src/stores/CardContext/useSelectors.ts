import { useContext } from 'react';

import { ApiContext, CardContext } from './cardStore';

export function useCardInfoSelector() {
  return useContext(CardContext);
}

export function useCardContextApiSelector() {
  return useContext(ApiContext);
}
