import { cloneDeep } from 'lodash-es';

import { createArray } from '@/utils';

import {
  CardCompanyInputElement,
  CardNicknameInputElement,
  CardNumberInputElement,
  CardOwnerInputElement,
  CardPasswordInputElement,
  ExpireMonthInputElement,
  ExpireYearInputElement,
  SecurityCodeInputElement,
} from './models';

const initialCardStore = {
  cardCompanies: createArray(1, (_: any, index: number) => new CardCompanyInputElement({ index })),
  cardNicknames: createArray(1, (_: any, index: number) => new CardNicknameInputElement({ index })),
  cardNumbers: createArray(4, (_: any, index: number) => new CardNumberInputElement({ index })),
  expireDates: [new ExpireMonthInputElement({}), new ExpireYearInputElement({ index: 1 })],
  cardOwners: createArray(1, (_: any, index: number) => new CardOwnerInputElement({ index })),
  securityCodes: createArray(1, (_: any, index: number) => new SecurityCodeInputElement({ index })),
  passwords: createArray(2, (_: any, index: number) => new CardPasswordInputElement({ index })),
};

export type TCardStore = typeof initialCardStore;
export type TCardStoreKeys = keyof TCardStore;

export function getInitialCardStore() {
  return cloneDeep(initialCardStore);
}
