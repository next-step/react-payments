import type { CardNumbersState, ExpireDatesState, PasswordsState } from '@/types/types';

export const cardNumbersInit: CardNumbersState = [
  {
    key: 'card-first-num',
    value: undefined,
  },
  {
    key: 'card-second-num',
    value: undefined,
  },
  {
    type: 'password',
    key: 'card-third-num',
    value: undefined,
  },
  {
    type: 'password',
    key: 'card-forth-num',
    value: undefined,
  },
];

export const expireDatesInit: ExpireDatesState = [
  {
    key: 'card-expired-month',
    value: undefined,
    placeholder: 'MM',
  },
  {
    key: 'card-expired-year',
    value: undefined,
    placeholder: 'YY',
  },
];

export const passwordsInit: PasswordsState = [
  {
    key: 'card-password-first',
    value: undefined,
  },
  {
    key: 'card-password-second',
    value: undefined,
  },
];
