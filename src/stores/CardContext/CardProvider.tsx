import React, { PropsWithChildren, useMemo, useReducer } from 'react';

import type { CardStore } from '../types';
import { reducer, getInitialCardStore, ApiContext, CardContext } from './cardStore';

interface CardProviderProps {
  value?: CardStore;
}

export function CardProvider({ value, children }: PropsWithChildren<CardProviderProps>) {
  const [store, dispatch] = useReducer(reducer, value || getInitialCardStore());

  const cardContextApis = useMemo(() => ({ dispatch }), [dispatch]);

  return (
    // eslint-disable-next-line
    <CardContext.Provider value={{ ...store }}>
      <ApiContext.Provider value={cardContextApis}>{children}</ApiContext.Provider>
    </CardContext.Provider>
  );
}
