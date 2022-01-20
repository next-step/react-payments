type cardSize = 'small' | 'big';

export interface initCardState {
  company: string;
  cardNumber: (number | string)[];
  owner: string;
  expiryDate: (number | string)[];
  cvc: number | string;
  password: number[];
}

export interface CardProps extends Partial<initCardState> {
  size?: cardSize;
  bgColor?: string;
  company?: string;
}
