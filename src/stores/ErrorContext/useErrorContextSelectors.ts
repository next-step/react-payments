import { useContext } from 'react';

import { ErrorApiContext } from './errorStore';

export function useErrorContextApiSelector() {
  return useContext(ErrorApiContext);
}
