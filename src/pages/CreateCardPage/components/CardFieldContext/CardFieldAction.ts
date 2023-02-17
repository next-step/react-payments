import { CardFieldAction } from './CardFieldReducer';

type ActionTypes = "APPEND_CARD_NUM" | "DELETE_CARD_NUM" | "UPDATE_CARD_OWNER_NAME"

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
} satisfies Record<ActionTypes, (value: any) => CardFieldAction>;
