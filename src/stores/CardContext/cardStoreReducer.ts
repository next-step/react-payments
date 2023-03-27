import { TCardStore, TCardStoreKeys, getInitialCardStore } from './initialCardStore';
import {
  CardCompanyInputElement,
  CardNicknameInputElement,
  CardNumberInputElement,
  CardOwnerInputElement,
  CardPasswordInputElement,
  ExpireDateInputElement,
  SecurityCodeInputElement,
} from './models';

type TCardStoreActions = TCardStoreKeys;

type TCardInputPayload = { index: number; value: any };

export function cardStoreReducer(store: TCardStore, action: { type: TCardStoreActions; payload?: TCardInputPayload }) {
  const { type, payload } = action;
  const { index, value } = payload as TCardInputPayload;
  if (store[type][index].value === value) return store;

  switch (type) {
    case 'cardCompanies': {
      store.cardCompanies[index] = new CardCompanyInputElement({ ...store.cardCompanies[index], value });
      break;
    }
    case 'cardNicknames': {
      store.cardNicknames[index] = new CardNicknameInputElement({ ...store.cardNicknames[index], value });
      break;
    }
    case 'cardNumbers': {
      store.cardNumbers[index] = new CardNumberInputElement({ ...store.cardNumbers[index], value });
      break;
    }
    case 'expireDates': {
      store.expireDates[index] = new ExpireDateInputElement({ ...store.expireDates[index], value });
      break;
    }
    case 'cardOwners': {
      store.cardOwners[index] = new CardOwnerInputElement({ ...store.cardOwners[index], value });
      break;
    }
    case 'passwords': {
      store.passwords[index] = new CardPasswordInputElement({ ...store.passwords[index], value });
      break;
    }
    case 'securityCodes': {
      store.securityCodes[index] = new SecurityCodeInputElement({ ...store.securityCodes[index], value });
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
