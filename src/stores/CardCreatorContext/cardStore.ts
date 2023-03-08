import { createContext } from 'react';

import { CardCompanyModel } from '@/pages/CardCreator/hooks/useCardCompanySelectModal';

import { DispatchContext, ReducerReturnType } from '../types';
import {
  cardCompanyInit,
  cardNumbersInit,
  expireDatesInit,
  cardOwnersInit,
  securityCodesInit,
  passwordsInit,
  cardNicknameInit,
} from './CardCreatorStates';

export type CardStore = {
  cardCompany: typeof cardCompanyInit;
  cardNickname: typeof cardNicknameInit;
  cardNumbers: typeof cardNumbersInit;
  expireDates: typeof expireDatesInit;
  cardOwners: typeof cardOwnersInit;
  passwords: typeof passwordsInit;
  securityCodes: typeof securityCodesInit;
};

export type Actions = keyof CardStore;

export const initialCardStore: CardStore = {
  cardCompany: cardCompanyInit,
  cardNickname: cardNicknameInit,
  cardNumbers: cardNumbersInit,
  expireDates: expireDatesInit,
  cardOwners: cardOwnersInit,
  passwords: passwordsInit,
  securityCodes: securityCodesInit,
};

type CardNickNamePayload = { value: string | CardCompanyModel };
type CardInputPayload = { index: number; value: string };

export function reducer(store: CardStore, action: { type: Actions; payload: CardInputPayload | CardNickNamePayload }) {
  const { type, payload } = action;

  switch (type) {
    case 'cardCompany':
    case 'cardNickname': {
      const { value } = payload as CardNickNamePayload;
      if (store[type].value === value) return store;

      store[type] = {
        ...store[type],
        // @ts-ignore
        value,
      };
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
type Dispatch = CardReducerType[1];
type CardCompanyStoreContextType = CardStore['cardCompany'] | null;
type CardNicknameStoreContextType = CardStore['cardNickname'] | null;
type CardNumbersStoreContextType = CardStore['cardNumbers'] | null;
type ExpireDatesStoreContextType = CardStore['expireDates'] | null;
type CardOwnersStoreContextType = CardStore['cardOwners'] | null;
type PasswordsStoreContextType = CardStore['passwords'] | null;
type SecurityCodesStoreContextType = CardStore['securityCodes'] | null;
type ApiContextType = DispatchContext<Dispatch>;

export const CardCompanyStoreContext = createContext<CardCompanyStoreContextType>(null);
export const CardNicknameStoreContext = createContext<CardNicknameStoreContextType>(null);
export const CardNumberStoreContext = createContext<CardNumbersStoreContextType>(null);
export const ExpireDatesStoreContext = createContext<ExpireDatesStoreContextType>(null);
export const CardOwnersStoreContext = createContext<CardOwnersStoreContextType>(null);
export const PasswordsStoreContext = createContext<PasswordsStoreContextType>(null);
export const SecurityCodesStoreContext = createContext<SecurityCodesStoreContextType>(null);
export const ApiContext = createContext<ApiContextType>(null);
