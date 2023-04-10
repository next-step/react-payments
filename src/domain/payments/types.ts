type TDigit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type TColorCode = `#${string}`;

export type TCardNumber = `${TDigit}${TDigit}${TDigit}${TDigit}`;
export type TCardNumbers = TCardNumber[];

export type TCVC = `${TDigit}${TDigit}${TDigit}`;

export type TCardComponentProps<T = string[]> = {
  onChange?: (argument: T) => void;
  onFulfill?: (argument: T) => void;
  prevRef?: React.RefObject<HTMLInputElement>;
  nextRef?: React.RefObject<HTMLInputElement>;
  forwardedRef?: React.ForwardedRef<HTMLInputElement>;
};

export interface ICard {
  // 카드 식별을 위한  정보
  name?: string;
  owner?: string;
  alias?: string;
  numbers: TCardNumbers | string[];
  // 카드 유효성 판별을 위한 정보
  expiredMonth: string;
  expiredYear: string;
  pin?: string;
  cvc?: TCVC | string;

  createdAt?: number;
  updatedAt?: number;
}

export interface ICardType {
  id: number;
  cardName: string;
  color: TColorCode;
  cardNumberPrefix: TCardNumbers;
}

export interface ICardDetailMessage {
  step: number;
  message: string;
}
