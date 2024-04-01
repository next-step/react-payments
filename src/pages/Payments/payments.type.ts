import { CARD_COMPANY } from '@/components/input/molecules/card/company/company.constant';
import { STEP } from './payments.constant';

export type PaymentsStep = (typeof STEP)[keyof typeof STEP];
export type PaymentsStepKey = keyof typeof STEP;
type CompanyKey = keyof typeof CARD_COMPANY;

export interface Card {
  numberFirst: string;
  numberSecond: string;
  numberThird: string;
  numberFourth: string;
  expireMonth: string;
  expireYear: string;
  ownerName: string;
  createdAt: Date;
  id: string;
  company: CompanyKey;
}

export interface CardForm extends Card {
  passwordFirst: string;
  passwordSecond: string;
  passwordThird: string;
  passwordFourth: string;
  securityCode: string;
}

export interface PaymentsCard extends Card {
  cardName?: string;
}

export interface PaymentsCardProps {
  data: PaymentsCard;
}

export interface CardFunnelData {
  cardList: PaymentsCard[];
  tempCard: Card | null;
}
