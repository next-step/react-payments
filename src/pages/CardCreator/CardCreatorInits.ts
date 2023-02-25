import type {
  CardNumbersState,
  CardOwnersState,
  ExpireDatesState,
  PasswordsState,
  SecurityCodesState,
} from '@/pages/CardCreator/types';
import { isNil } from '@/utils';

export const cardNumbersInit: CardNumbersState = [
  {
    key: 'card-first-num',
    value: undefined,
    checkIsValid: (value) => !!value && value.length === 4,
    checkIsAllowInput: (input) => !input || input.length <= 4,
  },
  {
    key: 'card-second-num',
    value: undefined,
    checkIsValid: (value) => !!value && value.length === 4,
    checkIsAllowInput: (input) => !input || input.length <= 4,
  },
  {
    type: 'password',
    key: 'card-third-num',
    value: undefined,
    checkIsValid: (value) => !!value && value.length === 4,
    checkIsAllowInput: (input) => !input || input.length <= 4,
  },
  {
    type: 'password',
    key: 'card-forth-num',
    value: undefined,
    checkIsValid: (value) => !!value && value.length === 4,
    checkIsAllowInput: (input) => !input || input.length <= 4,
  },
];

export const cardOwnersInit: CardOwnersState = [
  {
    key: 'card-owner-name',
    value: undefined,
    checkIsValid: (value) => !!value && value.length <= 30,
    checkIsAllowInput: (input) => !input || input.length <= 30,
  },
];

export const expireDatesInit: ExpireDatesState = [
  {
    key: 'card-expired-month',
    value: undefined,
    placeholder: 'MM',
    checkIsValid: (value) => !!value && value.length <= 2 && Number(value) <= 12,
    checkIsAllowInput: (input) => {
      if (isNil(input) || input.length === 0) return true;

      const isInputLengthValid = input.length <= 2;
      const numberedInput = Number(input);
      const isMinNumberValid = numberedInput >= 1;
      const isMaxNumberValid = numberedInput <= 12;
      return isInputLengthValid && isMinNumberValid && isMaxNumberValid;
    },
  },
  {
    key: 'card-expired-year',
    value: undefined,
    placeholder: 'YY',
    checkIsValid: (value) => !!value && value.length <= 2,
    checkIsAllowInput: (input) => !input || input.length <= 2,
  },
];

export const securityCodesInit: SecurityCodesState = [
  {
    key: 'card-security-code',
    value: undefined,
    checkIsValid: (value) => !!value && value.length === 3,
    checkIsAllowInput: (input) => !input || input.length <= 3,
  },
];

export const passwordsInit: PasswordsState = [
  {
    key: 'card-password-first',
    value: undefined,
    checkIsValid: (value) => !!value && value.length < 2,
    checkIsAllowInput: (input) => !input || input.length < 2,
  },
  {
    key: 'card-password-second',
    value: undefined,
    checkIsValid: (value) => !!value && value.length < 2,
    checkIsAllowInput: (input) => !input || input.length < 2,
  },
];
