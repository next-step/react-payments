import { createContext, Reducer, useReducer } from 'react';

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
  // FIXME: 반복 코드 없애기.
  switch (action.type) {
    case 'cardNumbers': {
      const { index, value } = action.payload;
      if (state.cardNumbers[index].value === value) return state;

      state.cardNumbers[index] = {
        ...state.cardNumbers[index],
        value,
      };
      state.cardNumbers = [...state.cardNumbers];
      break;
    }
    case 'expireDates': {
      const { index, value } = action.payload;
      if (state.expireDates[index].value === value) return state;

      state.expireDates[index] = {
        ...state.expireDates[index],
        value,
      };
      state.expireDates = [...state.expireDates];
      break;
    }
    case 'cardOwners': {
      const { index, value } = action.payload;
      if (state.cardOwners[index].value === value) return state;

      state.cardOwners[index] = {
        ...state.cardOwners[index],
        value,
      };
      state.cardOwners = [...state.cardOwners];
      break;
    }
    case 'passwords': {
      const { index, value } = action.payload;
      if (state.passwords[index].value === value) return state;

      state.passwords[index] = {
        ...state.passwords[index],
        value,
      };
      state.passwords = [...state.passwords];
      break;
    }
    case 'securityCodes': {
      const { index, value } = action.payload;
      if (state.securityCodes[index].value === value) return state;

      state.securityCodes[index] = {
        ...state.securityCodes[index],
        value,
      };
      state.securityCodes = [...state.securityCodes];
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
