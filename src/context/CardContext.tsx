import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import {
  Action,
  CardDispatchType,
  CardInfoType,
  CardValidationType,
} from '../type/card';
import { initCardInfo } from '../data/init';
import { maxLengthCheck, validateExpire } from '../utils/form';

const CardStateContext = createContext<CardInfoType | null>(null);
const CardDispatchContext = createContext<CardDispatchType | null>(null);
const CardValidationContext = createContext<CardValidationType | null>(null);

const cardReducer = (state: CardInfoType, action: Action): CardInfoType => {
  switch (action.type) {
    case 'SET_CARD_VALUE':
      /** DIGIT */
      if (action.target.name.includes('digit')) {
        return {
          ...state,
          digits: {
            ...state.digits,
            [action.target.name]: maxLengthCheck(action.target.value, 4),
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

      /** DEFAULT */
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

const DIGIT_REG = /^\d{4}$/;
const EXPIRE_REG = /(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])/;
const CVC_REG = /^\d{3}$/;

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cardReducer, initCardInfo);
  const [validation, setValidation] = useState<CardValidationType>({
    validDigit: false,
    validExpire: false,
    validCvc: false,
    validPassword: false,
    validAllSuccess: false,
  });

  useEffect(() => {
    setValidation({
      validDigit:
        DIGIT_REG.test(state.digits.digit1 as string) &&
        DIGIT_REG.test(state.digits.digit2 as string) &&
        DIGIT_REG.test(state.digits.digit3 as string) &&
        DIGIT_REG.test(state.digits.digit4 as string),
      validExpire: EXPIRE_REG.test(state.expire),
      validCvc: CVC_REG.test(state.cvc),
      validPassword: !!state.passwords.password1 && !!state.passwords.password2,
      validAllSuccess:
        validation.validDigit &&
        validation.validExpire &&
        validation.validCvc &&
        validation.validPassword,
    });
  }, [
    state,
    validation.validPassword,
    validation.validExpire,
    validation.validCvc,
    validation.validAllSuccess,
    validation.validDigit,
  ]);

  return (
    <CardStateContext.Provider value={state}>
      <CardDispatchContext.Provider value={dispatch}>
        <CardValidationContext.Provider value={validation}>
          {children}
        </CardValidationContext.Provider>
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

export const useCardValidation = () => {
  const state = useContext(CardValidationContext);
  if (!state) throw new Error('Cannot find CardValidationContext');
  return state;
};
