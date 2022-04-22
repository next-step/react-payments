import { CVC, PASSWORD, NICKNAME } from '@/constants/index';

export type cardSize = 'small' | 'big';

export interface initCardState {
  id: number;
  company: string;
  cardNumber: (number | string)[];
  owner: string;
  expiryDate: (number | string)[];
  cvc: number | string;
  password: number[];
  nickname: string;
  bgColor: string;
}

export interface CardProps
  extends Partial<
    Omit<initCardState, typeof CVC | typeof PASSWORD | typeof NICKNAME>
  > {
  size?: cardSize;
  company?: string;
}
