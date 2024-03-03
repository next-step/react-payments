import { CARD_SIZE } from './Card.constant.ts';

export type CardSizeType = (typeof CARD_SIZE)[keyof typeof CARD_SIZE];

export interface ICard {
  name: string;
  nickName?: string;
  style?: string;
  year: number;
  number: string;
  month: number;
  ownerName: string;
}
