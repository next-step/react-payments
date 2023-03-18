import { createContext } from 'react';
import { cloneDeep } from 'lodash-es';

import type { TCardCompany } from '@/types';

import { DispatchContext, ReducerReturnType, CardStoreActions, CardStore } from '../types';
import {
  cardCompanyInit,
  cardNumbersInit,
  expireDatesInit,
  cardOwnersInit,
  securityCodesInit,
  passwordsInit,
  cardNicknameInit,
} from './CardStates';

const initialCardStore: CardStore = {
  cardCompany: cardCompanyInit,
  cardNickname: cardNicknameInit,
  cardNumbers: cardNumbersInit,
  expireDates: expireDatesInit,
  cardOwners: cardOwnersInit,
  passwords: passwordsInit,
  securityCodes: securityCodesInit,
};

export function getInitialCardStore() {
  return cloneDeep(initialCardStore);
}

type CardNickNamePayload = { value: string | TCardCompany };
type CardInputPayload = { index: number; value: string };

export function reducer(
  store: CardStore,
  action: { type?: CardStoreActions; payload?: CardInputPayload | CardNickNamePayload }
) {
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
      return getInitialCardStore();
    }
  }

  return { ...store };
}

type CardReducerType = ReducerReturnType<typeof reducer>;
type Dispatch = CardReducerType[1];
type CardCompanyStoreContextType = CardStore | null;
type ApiContextType = DispatchContext<Dispatch>;

export const CardContext = createContext<CardCompanyStoreContextType>(null);
export const ApiContext = createContext<ApiContextType>(null);
