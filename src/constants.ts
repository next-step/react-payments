import { ICard, ICardType } from './domain/payments/types';

export const CARD_INPUT = {
  CARD_NAME: {
    MAX_LENGTH: 5,
  },
  CARD_NUMBER: {
    LENGTH: 4,
    EACH_LENGTH: 4,
  },
  EXPIRED: {
    MONTH: {
      PARSED_MIN_VALUE: 1,
      PARSED_MAX_VALUE: 12,
      LENGTH: 2,
    },
    YEAR: {
      LENGTH: 2,
    },
  },
  OWNER: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 30,
  },
  CVC: {
    LENGTH: 3,
  },
  PIN: {
    LENGTH: 4,
    EDITABLE_LENGTH: 2,
  },
};

export const CARD_DEFAULT_VALUE: ICard = {
  numbers: '1111-1111-1234-1234'.split('-'),
  name: '신용카드',
  expiredMonth: '12',
  expiredYear: '28',
  cvc: '000',
  owner: '홍길동',
  pin: '0000',
};

export const DEFAULT_CARD_TYPE: ICardType = {
  id: 0,
  cardName: CARD_DEFAULT_VALUE.name as string,
  color: '#94dacd',
  cardNumberPrefix: [],
};
// 포코, 준, 현석, 윤호, 환오, 태은, 준일, 은규
export const CARD_TYPES: ICardType[] = [
  { id: 1, cardName: '포코', color: '#e24141', cardNumberPrefix: ['1111', '1111'] },
  { id: 2, cardName: '준', color: '#547ce4', cardNumberPrefix: ['2222', '2222'] },
  { id: 3, cardName: '현석', color: '#de5ab9', cardNumberPrefix: ['3333', '3333'] },
  { id: 4, cardName: '윤호', color: '#73bc6d', cardNumberPrefix: ['4444', '4444'] },
  { id: 5, cardName: '환오', color: '#1cc6a6', cardNumberPrefix: ['5555', '5555'] },
  { id: 6, cardName: '태은', color: '#e76e9a', cardNumberPrefix: ['6666', '6666'] },
  { id: 7, cardName: '준일', color: '#f37d3b', cardNumberPrefix: ['7777', '7777'] },
  { id: 8, cardName: '은규', color: '#fbcd58', cardNumberPrefix: ['8888', '8888'] },
];
