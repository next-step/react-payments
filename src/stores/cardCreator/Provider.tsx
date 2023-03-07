import React, { PropsWithChildren, useMemo, useReducer } from 'react';

import {
  reducer,
  initialCardStore,
  ApiContext,
  CardNumberStoreContext,
  ExpireDatesStoreContext,
  PasswordsStoreContext,
  CardOwnersStoreContext,
  SecurityCodesStoreContext,
} from './cardStore';

// TODO: key값에 의한 추상화 Provider로 빼기
export function ReducerContextProvider({ children }: PropsWithChildren<any>) {
  const [store, dispatch] = useReducer(reducer, initialCardStore);

  const apis = useMemo(() => ({ dispatch }), [dispatch]);

  return (
    <ApiContext.Provider value={apis}>
      <CardNumberStoreContext.Provider value={store.cardNumbers}>
        <ExpireDatesStoreContext.Provider value={store.expireDates}>
          <CardOwnersStoreContext.Provider value={store.cardOwners}>
            <PasswordsStoreContext.Provider value={store.passwords}>
              <SecurityCodesStoreContext.Provider value={store.securityCodes}>
                {children}
              </SecurityCodesStoreContext.Provider>
            </PasswordsStoreContext.Provider>
          </CardOwnersStoreContext.Provider>
        </ExpireDatesStoreContext.Provider>
      </CardNumberStoreContext.Provider>
    </ApiContext.Provider>
  );
}
