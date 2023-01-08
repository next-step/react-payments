import type { 카드_테마_키 } from 'literal';

export type CardProps = {
  size?: 'small' | 'big';
  theme?: 카드_테마_키;
  isEmpty?: boolean;
  cardTitle?: string;
  cardNumber?: string;
  cardOwner?: string;
  cardMonth?: string;
  cardYear?: string;
};
