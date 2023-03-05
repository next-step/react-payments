import { CARD_COMPANIES, CARD_COMPANIES_ARRAY } from '@/constants';
import { CardField } from '@/types';
import {
  AppendNewCardAction,
  DeleteCardAction,
  UpdateCardAction,
} from './CardListReducer';
import { isCompanyValid } from '@/utils/typed';

export const ACTION = {
  APPEND_NEW_CARD: (id: number, cardField: CardField): AppendNewCardAction => {
    if (!isCompanyValid(cardField)) {
      throw new Error('cardCompany is not valid');
    }
    return {
      type: 'APPEND',
      payload: {
        value: {
          ...cardField,
          id,
          cardNickname: '',
        },
      },
    };
  },

  UPDATE_CARD_NICKNAME: (
    id: number,
    cardNickname: string
  ): UpdateCardAction => ({
    type: 'UPDATE',
    payload: {
      id,
      key: 'cardNickname',
      value: cardNickname,
    },
  }),

  DELETE_CARD: (id: number): DeleteCardAction => ({
    type: 'DELETE',
    payload: {
      id,
    },
  }),
};
