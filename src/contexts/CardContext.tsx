import {
  createContext,
  Dispatch,
  FunctionComponent,
  ReactNode,
  useContext,
  useReducer,
} from 'react';
//
import type { 카드_테마_타입 } from 'literal';

export type CardState = {
  theme?: 카드_테마_타입;
  cardTitle?: string;
  cardNumber: string;
  cardExpiration: string;
  cardOwner: string;
  cardSecurityCode: string;
  cardPassword: string;
};

type CardAction = { type: 'ADD_CARD'; card: CardState } | { type: 'DEL_CARD'; cardNumber: string };

const CardStateContext = createContext<CardState[]>([]);
const CardDispatchContext = createContext<Dispatch<CardAction> | null>(null);

const cardReducer = (state: CardState[], action: CardAction) => {
  switch (action.type) {
    case 'ADD_CARD': {
      return [...state, action.card];
    }
    case 'DEL_CARD': {
      const removedCardList = state.filter(({ cardNumber }) => cardNumber !== action.cardNumber);
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

export const useCardState = () => {
  const context = useContext(CardStateContext);
  if (!context) {
    throw new Error('useAppState must be used within the AppProvider');
  }
  return context;
};

export const useCardDispatch = () => {
  const context = useContext(CardDispatchContext);
  if (!context) {
    throw new Error('useAppDispatch must be used within the AppProvider');
  }
  return context;
};
