import type { CardNumbersState, ExpireDatesState, PasswordsState } from '@/types/types';

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

export const expireDatesInit: ExpireDatesState = [
  {
    key: 'card-expired-month',
    value: undefined,
    placeholder: 'MM',
    checkIsValid: (value) => !!value && value.length <= 2 && Number(value) <= 12,
    checkIsAllowInput: (input) => !input || (input.length <= 2 && Number(input) <= 12),
  },
  {
    key: 'card-expired-year',
    value: undefined,
    placeholder: 'YY',
    checkIsValid: (value) => !!value && value.length <= 2,
    checkIsAllowInput: (input) => !input || input.length <= 2,
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
