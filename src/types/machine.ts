import { PAGES, PagesType } from '../constants/pages';
import { CardInfo } from './card';

export type CardMachineContext = {
  cardState: CardInfo;
  cardList: CardInfo[];
};

export type GoPageEvent = {
  type: `GO_${keyof typeof PAGES}`;
};

type ActionEvent =
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
  | { type: 'SAVE_TO_LOCALSTORAGE'; value: CardInfo[] };

export type CardMachineEvent = GoPageEvent | ActionEvent;

type GoPageEventTypeMap = {
  [key in PagesType]: GoPageEvent['type'];
};

export const goPageEventTypeMap: GoPageEventTypeMap = {
  [PAGES.CARD_LIST]: 'GO_CARD_LIST',
  [PAGES.ADD_CARD]: 'GO_ADD_CARD',
  [PAGES.ADD_CARD_SUCCESS]: 'GO_ADD_CARD_SUCCESS',
  [PAGES.EDIT_CARD_NAME]: 'GO_EDIT_CARD_NAME',
};
