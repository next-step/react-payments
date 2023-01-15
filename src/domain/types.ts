export type TCardTypes =
  | "포코"
  | "준"
  | "공원"
  | "브랜"
  | "로이드"
  | "도비"
  | "콜린"
  | "썬";

export type TNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type TTwoDigitNumber = `${TNumber}${TNumber}`;

export type TCardNumber = `${TNumber}${TNumber}${TNumber}${TNumber}`;
export type TCardNumbers = [TCardNumber, TCardNumber];

export interface ICard {
  type: TCardTypes;
  numbers: TCardNumbers;
  expiredMonth: TTwoDigitNumber;
  expiredYear: TTwoDigitNumber;
  owner: string;
}
