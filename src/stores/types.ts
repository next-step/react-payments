import type { Reducer, useReducer } from 'react';

import {
  cardCompanyInit,
  cardNumbersInit,
  expireDatesInit,
  cardOwnersInit,
  securityCodesInit,
  passwordsInit,
  cardNicknameInit,
} from './CardContext/CardStates';

// @ts-ignore
// eslint-disable-next-line
export type ReducerReturnType<T> = ReturnType<typeof useReducer<Reducer<Parameters<T>[0], Parameters<T>[1]>>>;

export type DispatchContext<T> = { dispatch: T } | null;

export type CardStore = {
  cardCompany: typeof cardCompanyInit;
  cardNickname: typeof cardNicknameInit;
  cardNumbers: typeof cardNumbersInit;
  expireDates: typeof expireDatesInit;
  cardOwners: typeof cardOwnersInit;
  passwords: typeof passwordsInit;
  securityCodes: typeof securityCodesInit;
};

export type CardStoreActions = keyof CardStore;
