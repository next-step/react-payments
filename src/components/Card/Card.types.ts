import type { HTMLAttributes } from 'react';
import type { 카드_테마_타입 } from 'literal';

export type CardProps = {
  size?: 'small' | 'big';
  theme?: 카드_테마_타입;
  isAdd?: boolean;
  isEmpty?: boolean;
  cardTitle?: string;
  cardNumber?: string;
  cardOwner?: string;
  cardExpiration?: string;
} & HTMLAttributes<HTMLDivElement>;
