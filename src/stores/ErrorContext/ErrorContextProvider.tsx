import React, { PropsWithChildren, useMemo, useReducer } from 'react';

import { initialErrorStore, reducer, ErrorApiContext, ErrorStoreContext } from './errorStore';

export function ErrorContextProvider({ children }: PropsWithChildren<any>) {
  const [errorStore, dispatch] = useReducer(reducer, initialErrorStore);

  const errorContextApis = useMemo(() => ({ dispatch }), [dispatch]);

  return (
    <ErrorApiContext.Provider value={errorContextApis}>
      <ErrorStoreContext.Provider value={errorStore}>{children}</ErrorStoreContext.Provider>
    </ErrorApiContext.Provider>
  );
}
