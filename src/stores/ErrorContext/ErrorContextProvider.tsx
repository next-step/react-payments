import React, { PropsWithChildren, useMemo, useReducer } from 'react';

import { initialErrorStore, reducer, ErrorApiContext, ErrorStoreContext } from './errorStore';

export function ErrorContextProvider({ children }: PropsWithChildren<any>) {
  const [errorStore, dispatch] = useReducer(reducer, initialErrorStore);

  const apis = useMemo(() => ({ dispatch }), [dispatch]);

  return (
    <ErrorApiContext.Provider value={apis}>
      <ErrorStoreContext.Provider value={errorStore}>{children}</ErrorStoreContext.Provider>
    </ErrorApiContext.Provider>
  );
}
