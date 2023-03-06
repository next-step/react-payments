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

  const cardNumbersValue = useMemo(() => ({ store: store.cardNumbers }), [store.cardNumbers]);
  const expireDatesValue = useMemo(() => ({ store: store.expireDates }), [store.expireDates]);
  const cardOwnersValue = useMemo(() => ({ store: store.cardOwners }), [store.cardOwners]);
  const passwordsValue = useMemo(() => ({ store: store.passwords }), [store.passwords]);
  const securityCodesValue = useMemo(() => ({ store: store.securityCodes }), [store.securityCodes]);

  const apis = useMemo(() => ({ dispatch }), [dispatch]);

  return (
    <ApiContext.Provider value={apis}>
      <CardNumberStoreContext.Provider value={cardNumbersValue}>
        <ExpireDatesStoreContext.Provider value={expireDatesValue}>
          <CardOwnersStoreContext.Provider value={cardOwnersValue}>
            <PasswordsStoreContext.Provider value={passwordsValue}>
              <SecurityCodesStoreContext.Provider value={securityCodesValue}>
                {children}
              </SecurityCodesStoreContext.Provider>
            </PasswordsStoreContext.Provider>
          </CardOwnersStoreContext.Provider>
        </ExpireDatesStoreContext.Provider>
      </CardNumberStoreContext.Provider>
    </ApiContext.Provider>
  );
}
