import { CARD_SIZE } from './Card.constant.ts';

export type CardSizeType = (typeof CARD_SIZE)[keyof typeof CARD_SIZE];

export type CardType = {
  ownerName: string;
  name: string;
  number: string;
  expireYear: string;
  expireMonth: string;
  password: string;
  nickName?: string;
};
