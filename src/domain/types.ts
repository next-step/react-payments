export type TCardTypes =
  | "포코"
  | "준"
  | "공원"
  | "브랜"
  | "로이드"
  | "도비"
  | "콜린"
  | "썬";

export type TSingleNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type TTwoDigitNumber = `${TSingleNumber}${TSingleNumber}`;

export type TCardNumber =
  | ``
  | `${TSingleNumber}`
  | `${TSingleNumber}${TSingleNumber}`
  | `${TSingleNumber}${TSingleNumber}${TSingleNumber}`
  | `${TSingleNumber}${TSingleNumber}${TSingleNumber}${TSingleNumber}`;
export type TCardNumbers = TCardNumber[];

export interface ICard {
  type: TCardTypes;
  numbers: TCardNumbers;
  expiredMonth: TTwoDigitNumber;
  expiredYear: TTwoDigitNumber;
  owner: string;
}
