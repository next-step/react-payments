import { useContext } from 'react';

import { ErrorApiContext, ErrorStoreContext } from './errorStore';

export function useErrorContextApiSelector() {
  return useContext(ErrorApiContext);
}

export function useErrorSelector() {
  return useContext(ErrorStoreContext);
}
