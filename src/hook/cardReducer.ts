import { Action, CardInfoType } from '../type/card';
import { validateDigit, validateExpire, validatePassword } from '../utils/form';
import { initCardInfo } from '../data/init';

export const reducer = (state: CardInfoType, action: Action): CardInfoType => {
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
        color: action.color,
      };
    case 'SET_NICKNAME':
      return {
        ...state,
        nickname: action.nickname,
      };
    case 'INIT':
      return { ...initCardInfo };

    default:
      throw new Error('Unhandled action');
  }
};
