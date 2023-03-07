import { createContext } from 'react';

import {
  cardNumbersInit,
  expireDatesInit,
  cardOwnersInit,
  securityCodesInit,
  passwordsInit,
} from '@/pages/CardCreator/CardCreatorInits';

import { StoreContext, DispatchContext, ReducerReturnType } from '../types';

export const initialCardStore = {
  cardNumbers: cardNumbersInit,
  expireDates: expireDatesInit,
  cardOwners: cardOwnersInit,
  passwords: passwordsInit,
  securityCodes: securityCodesInit,
};

type Store = typeof initialCardStore;
export type Actions = keyof typeof initialCardStore;

export function reducer(store: Store, action: { type: Actions; payload: { index: number; value: string } }) {
  const { type, payload } = action;

  switch (type) {
    case 'cardNumbers':
    case 'expireDates':
    case 'cardOwners':
    case 'passwords':
    case 'securityCodes': {
      const { index, value } = payload;
      if (store[type][index].value === value) return store;

      store[type][index] = {
        ...store[type][index],
        value,
      };
      store[type] = [...store[type]];
      break;
    }
    default: {
      return store;
    }
  }

  return { ...store };
}

type CardReducerType = ReducerReturnType<typeof reducer>;
type CardStore = CardReducerType[0];
type Dispatch = CardReducerType[1];
type CardNumbersStoreContextType = CardStore['cardNumbers'] | null;
type ExpireDatesStoreContextType = CardStore['expireDates'] | null;
type CardOwnersStoreContextType = CardStore['cardOwners'] | null;
type PasswordsStoreContextType = CardStore['passwords'] | null;
type SecurityCodesStoreContextType = CardStore['securityCodes'] | null;
type ApiContextType = DispatchContext<Dispatch>;

export const CardNumberStoreContext = createContext<CardNumbersStoreContextType>(null);
export const ExpireDatesStoreContext = createContext<ExpireDatesStoreContextType>(null);
export const CardOwnersStoreContext = createContext<CardOwnersStoreContextType>(null);
export const PasswordsStoreContext = createContext<PasswordsStoreContextType>(null);
export const SecurityCodesStoreContext = createContext<SecurityCodesStoreContextType>(null);
export const ApiContext = createContext<ApiContextType>(null);
