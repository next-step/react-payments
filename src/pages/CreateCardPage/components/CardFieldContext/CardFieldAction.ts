import { CardFieldAction } from './CardFieldReducer';

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
} satisfies Record<"APPEND_CARD_NUM" | "DELETE_CARD_NUM", (value: any) => CardFieldAction>;
