import { PAGES } from '../constants/pages';

export interface CardInfo {
  id: string;
  brand: Brand;
  numbers: { first: string; second: string; third: string; fourth: string };
  owner: string;
  expiration: { month: string; year: string };
  password: { first: string; second: string };
  securityCode: string;
  nickname: string;
  createdAt: string;
}

export interface Brand {
  label: string;
  color: string;
}

export type CardMachineContext = {
  cardState: CardInfo;
  cardList: CardInfo[];
};

export type CardMachineEvent =
  | { type: 'UPDATE_CARD_NUMBER'; value: CardInfo['numbers'] }
  | {
      type: 'UPDATE_EXPIRATION_DATE';
      value: CardInfo['expiration'];
    }
  | { type: 'UPDATE_OWNER'; value: CardInfo['owner'] }
  | {
      type: 'UPDATE_SECURITY_CODE';
      value: CardInfo['securityCode'];
    }
  | { type: 'UPDATE_PASSWORD'; value: CardInfo['password'] }
  | { type: 'UPDATE_NICKNAME'; value: CardInfo['nickname'] }
  | { type: 'UPDATE_BRAND'; value: CardInfo['brand'] }
  | { type: 'RESET_CARD_INFO' }
  | { type: 'SUBMIT_CARD' }
  | { type: 'SAVE_CARD_LIST'; value: CardInfo }
  | { type: 'DELETE_CARD'; value: string }
  | { type: 'GET_CARD_INFO'; value: string }
  | { type: 'SAVE_TO_LOCALSTORAGE'; value: CardInfo[] }
  | { type: typeof PAGES.ADD_CARD }
  | { type: typeof PAGES.CARD_LIST }
  | { type: typeof PAGES.ADD_CARD_SUCCESS }
  | { type: typeof PAGES.EDIT_CARD_NAME };
