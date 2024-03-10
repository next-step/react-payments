import { STEP } from './payments.constant';

export type PaymentsStep = (typeof STEP)[keyof typeof STEP];
export type PaymentsStepKey = keyof typeof STEP;

export interface PaymentsCard extends Card {
  cardName?: string;
  createdAt: Date;
}

export interface Card {
  numberFirst: string;
  numberSecond: string;
  numberThird: string;
  numberFourth: string;
  expireMonth: string;
  expireYear: string;
  ownerName: string;
}

export interface CardFunnelData {
  cardList: PaymentsCard[];
  tempCard: Card | null;
}
