import { createContext } from 'react';

import {
  cardNumbersInit,
  expireDatesInit,
  cardOwnersInit,
  securityCodesInit,
  passwordsInit,
} from '@/pages/CardCreator/CardCreatorInits';

import { StoreContext, DispatchContext, ReducerReturnType } from './types';

export const initialCardStore = {
  cardNumbers: cardNumbersInit,
  expireDates: expireDatesInit,
  cardOwners: cardOwnersInit,
  passwords: passwordsInit,
  securityCodes: securityCodesInit,
};

type Store = typeof initialCardStore;
type Actions = keyof typeof initialCardStore;

export function reducer(state: Store, action: { type: Actions; payload: { index: number; value: string } }) {
  const { type, payload } = action;

  switch (type) {
    case 'cardNumbers':
    case 'expireDates':
    case 'cardOwners':
    case 'passwords':
    case 'securityCodes': {
      const { index, value } = payload;
      if (state[type][index].value === value) return state;

      state[type][index] = {
        ...state[type][index],
        value,
      };
      state[type] = [...state[type]];
      break;
    }
    default: {
      return state;
    }
  }

  return { ...state };
}

type CardReducerType = ReducerReturnType<typeof reducer>;
type CardStore = CardReducerType[0];
type Dispatch = CardReducerType[1];
type CardNumbersStoreContextType = StoreContext<CardStore['cardNumbers']>;
type ExpireDatesStoreContextType = StoreContext<CardStore['expireDates']>;
type CardOwnersStoreContextType = StoreContext<CardStore['cardOwners']>;
type PasswordsStoreContextType = StoreContext<CardStore['passwords']>;
type SecurityCodesStoreContextType = StoreContext<CardStore['securityCodes']>;
type ApiContextType = DispatchContext<Dispatch>;

export const CardNumberStoreContext = createContext<CardNumbersStoreContextType>(null);
export const ExpireDatesStoreContext = createContext<ExpireDatesStoreContextType>(null);
export const CardOwnersStoreContext = createContext<CardOwnersStoreContextType>(null);
export const PasswordsStoreContext = createContext<PasswordsStoreContextType>(null);
export const SecurityCodesStoreContext = createContext<SecurityCodesStoreContextType>(null);
export const ApiContext = createContext<ApiContextType>(null);
