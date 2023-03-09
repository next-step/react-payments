import { CARD_COMPANIES } from '@/constants';
import { CardFieldAction } from './CardFieldReducer';

type ActionTypes =
  | 'APPEND_CARD_NUM'
  | 'DELETE_CARD_NUM'
  | 'UPDATE_CARD_OWNER_NAME'
  | 'UPDATE_CARD_CVC'
  | 'UPDATE_CARD_PASSWORD'
  | 'UPDATE_EXPIRATION_MONTH'
  | 'UPDATE_EXPIRATION_YEAR'
  |'UPDATE_CARD_COMPANY';

export const ACTION = {
  APPEND_CARD_NUM: (value: string) => ({
    type: 'APPEND',
    payload: {
      key: 'cardNumber',
      value,
    },
  }),

  DELETE_CARD_NUM: () => ({
    type: 'DELETE',
    payload: {
      key: 'cardNumber',
      value: '',
    },
  }),

  UPDATE_CARD_OWNER_NAME: (value: string) => ({
    type: 'UPDATE',
    payload: {
      key: 'ownerName',
      value,
    },
  }),

  UPDATE_CARD_CVC: (value: string) => ({
    type: 'UPDATE',
    payload: {
      key: 'cvc',
      value,
    },
  }),

  UPDATE_CARD_PASSWORD: (value: string) => ({
    type: 'UPDATE',
    payload: {
      key: 'cardPassword',
      value,
    },
  }),

  UPDATE_EXPIRATION_MONTH: (value: string) => ({
    type: 'UPDATE',
    payload: {
      key: 'expirationMonth',
      value : value || '',
    },
  }),

  UPDATE_EXPIRATION_YEAR: (value: string) => ({
    type: 'UPDATE',
    payload: {
      key: 'expirationYear',
      value : value || '',
    },
  }),
  UPDATE_CARD_COMPANY : (value: keyof typeof CARD_COMPANIES) => ({
    type: 'UPDATE',
    payload: {
      key: 'cardCompany',
      value,
    },
}),
} satisfies Record<ActionTypes, (value: any) => CardFieldAction>;
