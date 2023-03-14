import { useContext } from 'react';

import { ApiContext, CardInfoContext } from './cardStore';

export function useCardInfoSelector() {
  return useContext(CardInfoContext);
}

export function useCardContextApiSelector() {
  return useContext(ApiContext);
}
