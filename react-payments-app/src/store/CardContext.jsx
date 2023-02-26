import { createContext, useContext, useState, useReducer } from 'react';
import { cardReducer } from './cardReducer';
import { CHANGE_CARD } from '../constants/action';

const initialState = {
  cardNumbers: ['', '', '', ''],
  cardExpirationDate: { month: '', year: '' },
  cardOwner: '',
  cardCVC: '',
  cardPassword: '',
  error: '',
};

export const CardContext = createContext(null);

export const CardProvider = ({ children }) => {
  const [cardInfo, dispatch] = useReducer(cardReducer, initialState);

  const changeCardInfo = (actionType, cardInfo) => {
    dispatch({ type: actionType, payload: cardInfo });
  };

  const handleInputChange = (e, errorMessage, actionMessage) => {
    const { value } = e.target;

    if (Number.isNaN(+value)) {
      changeCardInfo(CHANGE_CARD.ERROR, errorMessage);
      return;
    }

    changeCardInfo(CHANGE_CARD.ERROR, null);
    changeCardInfo(actionMessage, value);
  };

  console.log(cardInfo);
  //TODO: 닉네임 상태관리

  return (
    <CardContext.Provider
      value={{ cardInfo, changeCardInfo, handleInputChange }}
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
