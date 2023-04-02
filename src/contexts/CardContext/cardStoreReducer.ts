import { TCardStore, TCardStoreKeys, getInitialCardStore } from './initialCardStore';
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

type TCardStoreActions = TCardStoreKeys;

type TCardInputPayload = { index?: number; value?: any; errorMessage?: string };

export function cardStoreReducer(store: TCardStore, action: { type?: TCardStoreActions; payload?: TCardInputPayload }) {
  const { type, payload = {} } = action;
  const { index = 0, value, errorMessage } = payload as TCardInputPayload;

  if (!type) return getInitialCardStore();

  if (store[type][index].value === value) return store;

  switch (type) {
    case 'cardCompanies': {
      store.cardCompanies[index] = new CardCompanyInputElement({ ...store.cardCompanies[index], value, errorMessage });
      break;
    }
    case 'cardNicknames': {
      store.cardNicknames[index] = new CardNicknameInputElement({ ...store.cardNicknames[index], value, errorMessage });
      break;
    }
    case 'cardNumbers': {
      store.cardNumbers[index] = new CardNumberInputElement({ ...store.cardNumbers[index], value, errorMessage });
      break;
    }
    case 'expireDates': {
      if (index === 0) {
        store.expireDates[0] = new ExpireMonthInputElement({ ...store.expireDates[0], value, errorMessage });
        break;
      }
      store.expireDates[1] = new ExpireYearInputElement({ ...store.expireDates[1], value, errorMessage });
      break;
    }
    case 'cardOwners': {
      store.cardOwners[index] = new CardOwnerInputElement({ ...store.cardOwners[index], value, errorMessage });
      break;
    }
    case 'passwords': {
      store.passwords[index] = new CardPasswordInputElement({ ...store.passwords[index], value, errorMessage });
      break;
    }
    case 'securityCodes': {
      store.securityCodes[index] = new SecurityCodeInputElement({ ...store.securityCodes[index], value, errorMessage });
      break;
    }
    default: {
      return getInitialCardStore();
    }
  }

  // @ts-ignore
  store[type] = [...store[type]];

  return { ...store };
}
