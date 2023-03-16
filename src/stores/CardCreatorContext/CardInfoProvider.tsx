import React, { PropsWithChildren, useMemo, useReducer } from 'react';

import { reducer, initialCardStore, ApiContext, CardStore, CardInfoContext } from './cardStore';

interface CardInfoProviderProps {
  value?: CardStore;
}

export function CardInfoProvider({ value, children }: PropsWithChildren<CardInfoProviderProps>) {
  const [store, dispatch] = useReducer(reducer, value || initialCardStore);

  const apis = useMemo(() => ({ dispatch }), [dispatch]);

  return (
    // eslint-disable-next-line
    <CardInfoContext.Provider value={{ ...store }}>
      <ApiContext.Provider value={apis}>{children}</ApiContext.Provider>
    </CardInfoContext.Provider>
  );
}
