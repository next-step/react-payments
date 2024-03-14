import { CardInputInterface } from '@/features/card/types/cardInputTypes';

export const CARD_INPUT: CardInputInterface = {
  companyName: '',
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
};
