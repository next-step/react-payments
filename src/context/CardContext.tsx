import React, { createContext, ReactNode, useContext, useReducer } from 'react';
import { Action, CardDispatchType, CardInfoType } from '../type/card';
import { initCardInfo } from '../data/init';
import { validateDigit, validateExpire, validatePassword } from '../utils/form';

const CardStateContext = createContext<CardInfoType | null>(null);
const CardDispatchContext = createContext<CardDispatchType | null>(null);
const cardReducer = (state: CardInfoType, action: Action): CardInfoType => {
  switch (action.type) {
    case 'SET_CARD_VALUE':
      // expire
      if (action.target.name === 'expire') {
        return {
          ...state,
          [action.target.name]: validateExpire(action.target.value),
        };
      }

      return {
        ...state,
        [action.target.name]: action.target.value,
      };

    case 'SET_CARD_DIGIT':
      return {
        ...state,
        digits: {
          digit1: validateDigit(action.digits.digit1, 'digit1'),
          digit2: validateDigit(action.digits.digit2, 'digit2'),
          digit3: validateDigit(action.digits.digit3, 'digit3'),
          digit4: action.digits.digit4,
        },
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        passwords: {
          password1: validatePassword(action.passwords.password1, 'password1'),
          password2: action.passwords.password2,
        },
      };
    case 'SET_COMPANY':
      return {
        ...state,
        company: action.company,
        color: action.color,
      };
    case 'INIT':
      return { ...initCardInfo };

    default:
      throw new Error('Unhandled action');
  }
};

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cardReducer, initCardInfo);

  return (
    <CardStateContext.Provider value={state}>
      <CardDispatchContext.Provider value={dispatch}>
        {children}
      </CardDispatchContext.Provider>
    </CardStateContext.Provider>
  );
};

export const useCardState = () => {
  const state = useContext(CardStateContext);
  if (!state) throw new Error('Cannot find CardStateProvider');
  return state;
};

export const useCardDispatch = () => {
  const dispatch = useContext(CardDispatchContext);
  if (!dispatch) throw new Error('Cannot find CardDispatchProvider');
  return dispatch;
};
