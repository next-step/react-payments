import { CardInputInterface } from '@/features/card/types/cardTypes';

export const CARD_INPUT: CardInputInterface = {
  companyName: '우리카드',
  cardNumber: {
    first: '',
    second: '',
    third: '',
    fourth: '',
  },
  expirationDate: {
    MM: '',
    YY: '',
  },
  ownerName: '',
  securityCode: '',
  password: {
    first: '',
    second: '',
  },
  nickname: '',
};
