import React, { PropsWithChildren, useMemo, useReducer } from 'react';

import {
  reducer,
  initialCardStore,
  ApiContext,
  CardStore,
  CardCompanyStoreContext,
  CardNicknameStoreContext,
  CardNumberStoreContext,
  ExpireDatesStoreContext,
  PasswordsStoreContext,
  CardOwnersStoreContext,
  SecurityCodesStoreContext,
} from './cardStore';

interface CardInfoProviderProps {
  value: CardStore;
}

// TODO: key값에 의한 추상화 Provider로 빼기 (like jotai)
export function CardInfoProvider({ value, children }: PropsWithChildren<CardInfoProviderProps>) {
  const [store, dispatch] = useReducer(reducer, value || initialCardStore);

  const apis = useMemo(() => ({ dispatch }), [dispatch]);

  // context를 쪼개면 갱신된 context의 consumer의 하부만 re-render된다.
  return (
    <ApiContext.Provider value={apis}>
      <CardCompanyStoreContext.Provider value={store.cardCompany}>
        <CardNicknameStoreContext.Provider value={store.cardNickname}>
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
        </CardNicknameStoreContext.Provider>
      </CardCompanyStoreContext.Provider>
    </ApiContext.Provider>
  );
}
