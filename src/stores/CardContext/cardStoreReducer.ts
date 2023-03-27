import { TCardStore, TCardStoreKeys, getInitialCardStore } from './initialCardStore';

type TCardStoreActions = TCardStoreKeys;

type TCardInputPayload = { index: number; value: any };

export function cardStoreReducer(store: TCardStore, action: { type: TCardStoreActions; payload?: TCardInputPayload }) {
  const { type, payload } = action;

  switch (type) {
    case 'cardCompanies':
    case 'cardNicknames':
    case 'cardNumbers':
    case 'expireDates':
    case 'cardOwners':
    case 'passwords':
    case 'securityCodes': {
      console.log(payload);
      const { index, value } = payload as TCardInputPayload;
      if (store[type][index].value === value) return store;

      store[type][index] = {
        ...store[type][index],
        value,
      };
      // @ts-ignore
      store[type] = [...store[type]];
      break;
    }
    default: {
      console.log('default', action);
      return getInitialCardStore();
    }
  }

  return { ...store };
}
