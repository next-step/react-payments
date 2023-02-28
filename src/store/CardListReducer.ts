import { CardInfo } from '@/types';

export type AppendNewCardAction = {
  type: 'APPEND';
  payload: {
    value: CardInfo;
  };
};

export type UpdateCardAction = {
  type: 'UPDATE';
  payload: {
    id: number;
    key: keyof CardInfo;
    value: string;
  };
};

export type DeleteCardAction = {
  type: 'DELETE';
  payload: {
    id: number;
  };
};

export type CardListAction =
  | DeleteCardAction
  | UpdateCardAction
  | AppendNewCardAction;

const cardListReducer = (state: CardInfo[], action: CardListAction) => {
  switch (action.type) {
    case 'UPDATE':
      const targetCard = state.find((card) => card.id === action.payload.id);
      if (!targetCard) throw new Error('targetCard is not found');
      const hasKey = action.payload.key in targetCard;
      if (!hasKey)
        throw new Error(`${action.payload.key} is not a key of CardInfo`);

      return state.map((card) => {
        if (card.id === action.payload.id) {
          return {
            ...card,
            [action.payload.key]: action.payload.value,
          };
        }
        return card;
      });

    case 'APPEND':
      return [...state, action.payload.value];

    case 'DELETE':
      if (!state.find((card) => card.id === action.payload.id))
        throw new Error('targetCard is not found');
      return state.filter((card) => card.id !== action.payload.id);

    default:
      throw new Error('Unhandled action');
  }
};

export default cardListReducer;
