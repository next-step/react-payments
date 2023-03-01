import { CARD_COMPANIES } from '@/constants';

export interface CardField {
  cardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  ownerName: string;
  cvc: string;
  cardPassword: string;
  cardCompany: keyof typeof CARD_COMPANIES | null;
}

export interface CardInfo extends CardField {
  id: number;
  cardNickName: string;
  cardCompany: keyof typeof CARD_COMPANIES;
}
