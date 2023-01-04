import {
  createContext,
  Dispatch,
  FunctionComponent,
  ReactNode,
  useContext,
  useReducer,
} from 'react';

type State = {
  cardTitle: string;
  cardNumber: string;
  cardOwner: string;
  cardMonth: string;
  cardYear: string;
  cardSecurityCode: string;
  cardPassword: string;
};

type Action =
  | { type: 'SET_CARD_TITLE'; cardTitle: string }
  | { type: 'ADD_CARD_NUMBER'; cardNumber: string }
  | { type: 'SET_CARD_OWNER'; cardOwner: string }
  | { type: 'SET_CARD_MONTH'; cardMonth: string }
  | { type: 'SET_CARD_YEAR'; cardYear: string }
  | { type: 'SET_CARD_SECURITY_CODE'; cardSecurityCode: string }
  | { type: 'SET_CARD_PASSWORD'; cardPassword: string };

const 카드_초깃값: State = {
  cardTitle: '',
  cardNumber: '',
  cardOwner: '',
  cardMonth: '',
  cardYear: '',
  cardSecurityCode: '',
  cardPassword: '',
};

const CardStateContext = createContext<State>(카드_초깃값);
const CardDispatchContext = createContext<Dispatch<Action> | null>(null);

const cardReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_CARD_TITLE': {
      return { ...state, cardTitle: action.cardTitle };
    }
    case 'ADD_CARD_NUMBER': {
      return { ...state, cardNumber: `${state.cardNumber}${action.cardNumber}` };
    }
    case 'SET_CARD_OWNER': {
      return { ...state, cardOwner: action.cardOwner };
    }
    case 'SET_CARD_MONTH': {
      return { ...state, cardMonth: action.cardMonth };
    }
    case 'SET_CARD_YEAR': {
      return { ...state, cardYear: action.cardYear };
    }
    default: {
      throw new Error(`Unhandled action`);
    }
  }
};

export const CardProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cardReducer, 카드_초깃값);

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
