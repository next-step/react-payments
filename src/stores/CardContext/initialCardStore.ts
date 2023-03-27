import { cloneDeep } from 'lodash-es';

import { createArray } from '@/utils';

import {
  CardCompanyInputElement,
  CardNicknameInputElement,
  CardNumberInputElement,
  CardOwnerInputElement,
  CardPasswordInputElement,
  ExpireDateInputElement,
  SecurityCodeInputElement,
} from './models';

const initialCardStore = {
  cardCompanies: createArray(1, (_: any, i: number) => new CardCompanyInputElement({}, i)),
  cardNicknames: createArray(1, (_: any, i: number) => new CardNicknameInputElement({}, i)),
  cardNumbers: createArray(4, (_: any, i: number) => new CardNumberInputElement({}, i)),
  expireDates: createArray(2, (_: any, i: number) => new ExpireDateInputElement({}, i)),
  cardOwners: createArray(1, (_: any, i: number) => new CardOwnerInputElement({}, i)),
  securityCodes: createArray(1, (_: any, i: number) => new SecurityCodeInputElement({}, i)),
  passwords: createArray(2, (_: any, i: number) => new CardPasswordInputElement({}, i)),
};

export type TCardStore = typeof initialCardStore;
export type TCardStoreKeys = keyof TCardStore;

export function getInitialCardStore() {
  return cloneDeep(initialCardStore);
}
