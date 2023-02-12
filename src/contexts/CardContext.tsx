import { createContext, Dispatch, FunctionComponent, ReactNode, useReducer } from 'react';
//
import type { CardState } from 'literal';
import type { CardAction } from './contexts.types';

export const CardStateContext = createContext<CardState[]>([]);
export const CardDispatchContext = createContext<Dispatch<CardAction> | null>(null);

const cardReducer = (state: CardState[], action: CardAction) => {
  switch (action.type) {
    case 'ADD_CARD': {
      return [...state, action.card];
    }
    case 'EDIT_CARD': {
      const updatedCardList = state.map((card) => {
        const isValid =
          card.cardNumber === action.card.cardNumber && card.cardOwner === action.card.cardOwner;

        return isValid ? { ...card, cardTitle: action.card.cardTitle } : card;
      });

      return updatedCardList;
    }
    case 'DEL_CARD': {
      const removedCardList = state.filter(
        ({ cardNumber, cardOwner }) =>
          cardNumber !== action.card.cardNumber || cardOwner !== action.card.cardOwner,
      );
      return removedCardList;
    }
    default: {
      throw new Error(`Unhandled action`);
    }
  }
};

export const CardProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cardReducer, []);

  return (
    <CardStateContext.Provider value={state}>
      <CardDispatchContext.Provider value={dispatch}>{children}</CardDispatchContext.Provider>
    </CardStateContext.Provider>
  );
};
