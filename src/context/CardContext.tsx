import React, { Dispatch, useContext, useReducer } from 'react';
import { handleDigit, handleExpire, handlePassword } from '../utils/form';

export type CardStateType = {
  digits: { digit1: string; digit2: string; digit3: string; digit4: string };
  expire: string;
  name: string;
  cvc: string;
  passwords: { password1: string; password2: string };
};

type Action =
  | {
      type: 'SET_DIGIT';
      digits: {
        digit1: string;
        digit2: string;
        digit3: string;
        digit4: string;
      };
    }
  | {
      type: 'SET_EXPIRE';
      expire: string;
    }
  | {
      type: 'SET_NAME';
      name: string;
    }
  | {
      type: 'SET_CVC';
      cvc: string;
    }
  | {
      type: 'SET_PASSWORD';
      passwords: { password1: string; password2: string };
    };

type SampleDispatch = Dispatch<Action>;

const initState: CardStateType = {
  digits: { digit1: '', digit2: '', digit3: '', digit4: '' },
  expire: '',
  name: '',
  cvc: '',
  passwords: { password1: '', password2: '' },
};

const CardStateContext = React.createContext<CardStateType | null>(null);
const CardDispatchContext = React.createContext<SampleDispatch | null>(null);

const reducer = (state: CardStateType, action: Action): CardStateType => {
  switch (action.type) {
    case 'SET_DIGIT':
      return {
        ...state,
        digits: {
          digit1: handleDigit(action.digits.digit1, 'digit1'),
          digit2: handleDigit(action.digits.digit2, 'digit2'),
          digit3: handleDigit(action.digits.digit3, 'digit3'),
          digit4: action.digits.digit4,
        },
      };
    case 'SET_EXPIRE':
      return {
        ...state,
        expire: handleExpire(action.expire),
      };
    case 'SET_NAME':
      return {
        ...state,
        name: action.name,
      };
    case 'SET_CVC':
      return {
        ...state,
        cvc: action.cvc,
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        passwords: {
          password1: handlePassword(action.passwords.password1, 'password1'),
          password2: action.passwords.password2,
        },
      };
    default:
      throw new Error('Unhandled action');
  }
};

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initState);

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
