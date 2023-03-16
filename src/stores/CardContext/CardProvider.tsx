import React, { PropsWithChildren, useMemo, useReducer } from 'react';

import { reducer, initialCardStore, ApiContext, CardStore, CardContext } from './cardStore';

interface CardProviderProps {
  value?: CardStore;
}

export function CardProvider({ value, children }: PropsWithChildren<CardProviderProps>) {
  const [store, dispatch] = useReducer(reducer, value || initialCardStore);

  const apis = useMemo(() => ({ dispatch }), [dispatch]);

  return (
    // eslint-disable-next-line
    <CardContext.Provider value={{ ...store }}>
      <ApiContext.Provider value={apis}>{children}</ApiContext.Provider>
    </CardContext.Provider>
  );
}
