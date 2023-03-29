import React, { PropsWithChildren, useMemo, useReducer } from 'react';

import { cardStoreReducer } from './cardStoreReducer';
import { TCardStore, getInitialCardStore } from './initialCardStore';
import { CardApiContext, CardContext } from './cardContext';

interface CardProviderProps {
  value?: TCardStore;
}

export function CardProvider({ value, children }: PropsWithChildren<CardProviderProps>) {
  const [store, dispatch] = useReducer(cardStoreReducer, value || getInitialCardStore());

  const cardContextApis = useMemo(() => ({ dispatch }), [dispatch]);

  return (
    // eslint-disable-next-line
    <CardContext.Provider value={{ ...store }}>
      <CardApiContext.Provider value={cardContextApis}>{children}</CardApiContext.Provider>
    </CardContext.Provider>
  );
}
