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

type TCardInputPayload = { index: number; value: any; isValidate: boolean };

// TODO: reducer지우고 state로 교체하기
export function cardStoreReducer(store: TCardStore, action: { type: TCardStoreActions; payload?: TCardInputPayload }) {
  const { type, payload } = action;
  console.log(payload);
  const { index = 0, value, isValidate } = payload as TCardInputPayload;
  if (store[type][index].value === value) return store;

  switch (type) {
    case 'cardCompanies': {
      store.cardCompanies[index] = new CardCompanyInputElement({ ...store.cardCompanies[index], value, isValidate });
      break;
    }
    case 'cardNicknames': {
      store.cardNicknames[index] = new CardNicknameInputElement({ ...store.cardNicknames[index], value, isValidate });
      break;
    }
    case 'cardNumbers': {
      store.cardNumbers[index] = new CardNumberInputElement({ ...store.cardNumbers[index], value, isValidate });
      break;
    }
    case 'expireDates': {
      store.expireDates[index] = new ExpireDateInputElement({ ...store.expireDates[index], value, isValidate });
      break;
    }
    case 'cardOwners': {
      store.cardOwners[index] = new CardOwnerInputElement({ ...store.cardOwners[index], value, isValidate });
      break;
    }
    case 'passwords': {
      store.passwords[index] = new CardPasswordInputElement({ ...store.passwords[index], value, isValidate });
      break;
    }
    case 'securityCodes': {
      store.securityCodes[index] = new SecurityCodeInputElement({ ...store.securityCodes[index], value, isValidate });
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
