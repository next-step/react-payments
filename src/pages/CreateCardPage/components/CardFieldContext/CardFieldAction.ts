import { CardFieldAction } from './CardFieldReducer';

type ActionTypes = "APPEND_CARD_NUM" | "DELETE_CARD_NUM" | "UPDATE_CARD_OWNER_NAME" | "UPDATE_CARD_CVC" | "UPDATE_CARD_PASSWORD"

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

    UPDATE_CARD_CVC : (value: string) => ({
        type: 'UPDATE',
        payload: {
            key: 'cvc',
            value,
        },
    }),

    UPDATE_CARD_PASSWORD : (value: string) => ({
      type: 'UPDATE',
      payload: {
          key: 'cardPassword',
          value,
      },
  }),
} satisfies Record<ActionTypes, (value: any) => CardFieldAction>;
