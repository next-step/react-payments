import { createContext, useContext, useReducer } from 'react';
import { cardReducer } from './cardReducer';

export const initialState = {
  id: 0,
  cardNumbers: '',
  cardExpirationDate: ['', ''],
  cardOwner: '',
  cardCVC: '',
  cardPassword: '',
  cardCompanyId: 0,
  cardNickname: '',
  error: '',
};

export const CardContext = createContext(null);

export const CardProvider = ({ children }) => {
  const [cardInfo, dispatch] = useReducer(cardReducer, initialState);

  const changeCardInfo = (actionType, data) => {
    dispatch({ type: actionType, payload: data });
  };

  const registerCard = (cardInfo) => {
    localStorage.setItem(cardInfo.id, JSON.stringify(cardInfo));
  };

  return (
    <CardContext.Provider value={{ cardInfo, changeCardInfo, registerCard }}>
      {children}
    </CardContext.Provider>
  );
};

export function useCard() {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error('Need to be within CardContext to use useCard.');
  }

  return context;
}
