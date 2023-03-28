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
  cardNicknames: createArray(1, () => new CardNicknameInputElement({})),
  cardNumbers: createArray(4, () => new CardNumberInputElement({})),
  expireDates: [new ExpireMonthInputElement({}), new ExpireYearInputElement({})],
  cardOwners: createArray(1, () => new CardOwnerInputElement({})),
  securityCodes: createArray(1, () => new SecurityCodeInputElement({})),
  passwords: createArray(2, () => new CardPasswordInputElement({})),
  cardCompanies: createArray(1, () => new CardCompanyInputElement({})),
};

export type TCardStore = typeof initialCardStore;
export type TCardStoreKeys = keyof TCardStore;

export function getInitialCardStore() {
  return cloneDeep(initialCardStore);
}
