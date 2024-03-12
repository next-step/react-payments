import { STEP } from './payments.constant';

export type PaymentsStep = (typeof STEP)[keyof typeof STEP];
export type PaymentsStepKey = keyof typeof STEP;

export interface Card {
  numberFirst: string;
  numberSecond: string;
  numberThird: string;
  numberFourth: string;
  expireMonth: string;
  expireYear: string;
  ownerName: string;
  createdAt: Date;
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
