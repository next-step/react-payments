import { createContext, Dispatch, PropsWithChildren, useReducer } from 'react';

import { addCard, updateCard, filterCards } from './model';

import type { ICard, ICardWithoutId } from 'types/card';

export interface CardContextBaseState {
  cards: ICard[];
}

export const ACTION_TYPE = {
  ADD_CARD: 'ADD_CARD',
  UPDATE_CARD: 'UPDATE_CARD',
  DELETE_CARD: 'DELETE_CARD',
} as const;

type Action =
  | {
      type: typeof ACTION_TYPE.ADD_CARD;
      payload: ICardWithoutId;
    }
  | {
      type: typeof ACTION_TYPE.UPDATE_CARD;
      payload: ICard;
    }
  | {
      type: typeof ACTION_TYPE.DELETE_CARD;
      payload: number;
    };

const initalState: CardContextBaseState = {
  cards: [],
};

export type CardDisptach = Dispatch<Action>;
export const CardStateContext = createContext<CardContextBaseState>(initalState);
export const CardDispatchContext = createContext<CardDisptach>(() => null);

function reducer(state: CardContextBaseState, action: Action) {
  switch (action.type) {
    case ACTION_TYPE.ADD_CARD: {
      return {
        cards: addCard(state.cards, action.payload),
      };
    }
    case ACTION_TYPE.UPDATE_CARD: {
      return {
        cards: updateCard(state.cards, action.payload),
      };
    }
    case ACTION_TYPE.DELETE_CARD: {
      return {
        cards: filterCards(state.cards, action.payload),
      };
    }
  }
}

function CardContextProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <CardDispatchContext.Provider value={dispatch}>
      <CardStateContext.Provider value={state}>{children}</CardStateContext.Provider>
    </CardDispatchContext.Provider>
  );
}

export default CardContextProvider;
