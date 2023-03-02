import { createContext, useContext, useState, useReducer } from 'react';
import { cardReducer } from './cardReducer';
import { CHANGE_CARD } from '../constants/action';

const initialState = {
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
  const [cardList, setCardList] = useState([]);
  const [cardInfo, dispatch] = useReducer(cardReducer, initialState);

  const changeCardInfo = (actionType, cardInfo) => {
    dispatch({ type: actionType, payload: cardInfo });
  };

  const registerCard = (cardInfo) => {
    setCardList([...cardList, cardInfo]);
  };

  return (
    <CardContext.Provider
      value={{ cardInfo, changeCardInfo, registerCard, cardList }}
    >
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
