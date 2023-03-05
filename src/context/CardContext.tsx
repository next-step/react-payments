import React, { Dispatch, useContext, useReducer } from 'react';
import { validateDigit, validateExpire, validatePassword } from '../utils/form';

export type DigitType = {
  digit1: number | string;
  digit2: number | string;
  digit3: number | string;
  digit4: number | string;
};

export type CardStateType = {
  digits: DigitType;
  expire: string;
  name: string;
  cvc: string;
  passwords: { password1: string; password2: string };
  company: string;
  nickname: string;
  createdDate: number;
};

type Action =
  | {
      type: 'SET_DIGIT';
      digits: DigitType;
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
    }
  | {
      type: 'SET_COMPANY';
      company: string;
    }
  | {
      type: 'SET_NICKNAME';
      nickname: string;
    };

type CardDispatchType = Dispatch<Action>;

const initState: CardStateType = {
  digits: { digit1: '', digit2: '', digit3: '', digit4: '' },
  expire: '',
  name: '',
  cvc: '',
  passwords: { password1: '', password2: '' },
  company: '',
  nickname: '',
  createdDate: 0,
};

const CardStateContext = React.createContext<CardStateType | null>(null);
const CardDispatchContext = React.createContext<CardDispatchType | null>(null);

const reducer = (state: CardStateType, action: Action): CardStateType => {
  switch (action.type) {
    case 'SET_DIGIT':
      return {
        ...state,
        digits: {
          digit1: validateDigit(action.digits.digit1, 'digit1'),
          digit2: validateDigit(action.digits.digit2, 'digit2'),
          digit3: validateDigit(action.digits.digit3, 'digit3'),
          digit4: action.digits.digit4,
        },
      };
    case 'SET_EXPIRE':
      return {
        ...state,
        expire: validateExpire(action.expire),
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
          password1: validatePassword(action.passwords.password1, 'password1'),
          password2: action.passwords.password2,
        },
      };
    case 'SET_COMPANY':
      return {
        ...state,
        company: action.company,
      };
    case 'SET_NICKNAME':
      return {
        ...state,
        nickname: action.nickname,
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
