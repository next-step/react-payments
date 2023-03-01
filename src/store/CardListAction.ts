import { CARD_COMPANIES, CARD_COMPANIES_ARRAY } from '@/constants';
import { CardField } from '@/types';
import {
  AppendNewCardAction,
  DeleteCardAction,
  UpdateCardAction,
} from './CardListReducer';

const isCompanyValid = (
  cardField: any
): cardField is CardField & {
  cardCompany: keyof typeof CARD_COMPANIES;
} => CARD_COMPANIES_ARRAY.includes(cardField.cardCompany);

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
          cardNickName: '',
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
