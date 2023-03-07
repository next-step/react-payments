import { createContext } from 'react';

import {
  cardNumbersInit,
  expireDatesInit,
  cardOwnersInit,
  securityCodesInit,
  passwordsInit,
} from '@/pages/CardCreator/CardCreatorInits';

import { CardCompanyModel } from '@/pages/CardCreator/hooks/useCardCompanySelectModal';

import { DispatchContext, ReducerReturnType } from '../types';

type Store = {
  cardCompany: CardCompanyModel | null;
  cardNumbers: typeof cardNumbersInit;
  expireDates: typeof expireDatesInit;
  cardOwners: typeof cardOwnersInit;
  passwords: typeof passwordsInit;
  securityCodes: typeof securityCodesInit;
};

export type Actions = keyof Store;

export const initialCardStore: Store = {
  cardCompany: null,
  cardNumbers: cardNumbersInit,
  expireDates: expireDatesInit,
  cardOwners: cardOwnersInit,
  passwords: passwordsInit,
  securityCodes: securityCodesInit,
};

type CardInputPayload = { index: number; value: string };

export function reducer(store: Store, action: { type: Actions; payload: CardInputPayload | CardCompanyModel }) {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case 'cardCompany': {
      const cardCompanyPayload = payload as CardCompanyModel;
      console.log(cardCompanyPayload);
      if (store.cardCompany?.theme === cardCompanyPayload.theme) return store;
      console.log(cardCompanyPayload);
      store.cardCompany = cardCompanyPayload;
      break;
    }
    case 'cardNumbers':
    case 'expireDates':
    case 'cardOwners':
    case 'passwords':
    case 'securityCodes': {
      const { index, value } = payload as CardInputPayload;
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
type CardCompanyStoreContextType = CardStore['cardCompany'] | null;
type CardNumbersStoreContextType = CardStore['cardNumbers'] | null;
type ExpireDatesStoreContextType = CardStore['expireDates'] | null;
type CardOwnersStoreContextType = CardStore['cardOwners'] | null;
type PasswordsStoreContextType = CardStore['passwords'] | null;
type SecurityCodesStoreContextType = CardStore['securityCodes'] | null;
type ApiContextType = DispatchContext<Dispatch>;

export const CardCompanyStoreContext = createContext<CardCompanyStoreContextType>(null);
export const CardNumberStoreContext = createContext<CardNumbersStoreContextType>(null);
export const ExpireDatesStoreContext = createContext<ExpireDatesStoreContextType>(null);
export const CardOwnersStoreContext = createContext<CardOwnersStoreContextType>(null);
export const PasswordsStoreContext = createContext<PasswordsStoreContextType>(null);
export const SecurityCodesStoreContext = createContext<SecurityCodesStoreContextType>(null);
export const ApiContext = createContext<ApiContextType>(null);
