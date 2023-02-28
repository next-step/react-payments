import { CARD_COMPANIES } from '@/constants';
import { CardField } from '@/types';
import {
  AppendNewCardAction,
  DeleteCardAction,
  UpdateCardAction,
} from './CardListReducer';

export const ACTION = {
  APPEND_NEW_CARD: (id: number, cardField: CardField): AppendNewCardAction => {
    if (cardField.cardCompany === null) {
      throw new Error('cardCompany is not found');
    }
    return {
      type: 'APPEND',
      payload: {
        value: {
          ...cardField,
          id,
          cardNickName: CARD_COMPANIES[cardField.cardCompany] as any,
        },
      },
    };
  },

  UPDATE_CARD_NICKNAME: (
    id: number,
    cardNickName: string
  ): UpdateCardAction => ({
    type: 'UPDATE',
    payload: {
      id,
      key: 'cardNickName',
      value: cardNickName,
    },
  }),

  DELETE_CARD: (id: number): DeleteCardAction => ({
    type: 'DELETE',
    payload: {
      id,
    },
  }),
};
