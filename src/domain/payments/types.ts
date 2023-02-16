export type TCardSingleNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type TCardNumber = `${TCardSingleNumber}${TCardSingleNumber}${TCardSingleNumber}${TCardSingleNumber}`;
export type TCardNumbers = TCardNumber[];

export type TCVC = `${TCardSingleNumber}${TCardSingleNumber}${TCardSingleNumber}`;

export interface ICard {
  // 카드 식별을 위한  정보
  cardName?: string;
  owner?: string;
  alias?: string;
  numbers: TCardNumbers | string[];
  // 카드 유효성 판별을 위한 정보
  expiredMonth: number;
  expiredYear: number;
  password?: TCardNumber;
  cvc?: TCVC | string;
}
