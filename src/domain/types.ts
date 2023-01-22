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
export type TSecurityCode = `${TSingleNumber}${TSingleNumber}${TSingleNumber}`;
export type TCardNumber =
  | `${TSingleNumber}${TSingleNumber}${TSingleNumber}${TSingleNumber}`;
export type TCardNumbers = TCardNumber[];

export type TInvalidCode = `Invalid${
  | "CardNumbers"
  | "ExpiryDate"
  | "SecurityCode"
  | "Owner"
  | "Password"}`;

export interface ICard {
  id: string;
  type?: TCardTypes;
  numbers: TCardNumbers;
  expiredMonth: TTwoDigitNumber;
  expiredYear: TTwoDigitNumber;
  nickname?: string;
  owner: string;
}

export interface ICardDTO {
  type?: TCardTypes;
  numbers?: string[];
  expiredMonth?: string;
  expiredYear?: string;
  securityCode?: string;
  owner?: string;
  nickname?: string;
  password?: string;
}
