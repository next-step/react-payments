import { CARD_COMPANIES } from '@/constants';

export type CardField = {
  cardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  ownerName: string;
  cvc: string;
  cardPassword: string;
  cardCompany: keyof typeof CARD_COMPANIES | null;
};

export type CardInfo = {
  id: number;
  cardNickName: string;
} & CardField;
