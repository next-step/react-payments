import { CARD_SIZE } from './Card.variant.ts';

export type CardSizeType = (typeof CARD_SIZE)[keyof typeof CARD_SIZE];
