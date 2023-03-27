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
  cardCompanies: createArray(1, () => new CardCompanyInputElement({})),
  cardNicknames: createArray(1, () => new CardNicknameInputElement({})),
  cardNumbers: createArray(4, () => new CardNumberInputElement({})),
  expireDates: createArray(2, () => new ExpireDateInputElement({})),
  cardOwners: createArray(1, () => new CardOwnerInputElement({})),
  securityCodes: createArray(1, () => new SecurityCodeInputElement({})),
  passwords: createArray(2, () => new CardPasswordInputElement({})),
};

export type TCardStore = typeof initialCardStore;
export type TCardStoreKeys = keyof TCardStore;

export function getInitialCardStore() {
  return cloneDeep(initialCardStore);
}
