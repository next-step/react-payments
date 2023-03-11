import React, { createContext, ReactNode, useContext, useReducer } from 'react';
import { Action, CardDispatchType, CardInfoType } from '../type/card';
import { initCardInfo } from '../data/init';
import { validateDigit, validateExpire, validatePassword } from '../utils/form';

const CardStateContext = createContext<CardInfoType | null>(null);
const CardDispatchContext = createContext<CardDispatchType | null>(null);
const cardReducer = (state: CardInfoType, action: Action): CardInfoType => {
  switch (action.type) {
    case 'SET_CARD_VALUE':
      /** DIGIT */
      if (action.target.name.includes('digit')) {
        return {
          ...state,
          digits: {
            ...state.digits,
            [action.target.name]: action.target.value,
          },
        };
      }

      /** EXPIRE */
      if (action.target.name === 'expire') {
        return {
          ...state,
          [action.target.name]: validateExpire(action.target.value),
        };
      }

      /** PASSWORD */
      if (action.target.name.includes('password')) {
        return {
          ...state,
          passwords: {
            ...state.passwords,
            [action.target.name]: action.target.value,
          },
        };
      }

      return {
        ...state,
        [action.target.name]: action.target.value,
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
