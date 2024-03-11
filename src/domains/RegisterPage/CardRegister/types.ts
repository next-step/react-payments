export type Card = {
  cardType: CardType;
  cardNumber: CardNumber;
  holderName: string;
  expiration: ExpirationDate;
};

export type CardNumber = {
  firstNumber?: string;
  secondNumber?: string;
  thirdNumber?: string;
  fourthNumber?: string;
};

export type ExpirationDate = {
  month: string;
  year: string;
};

export type TwoPasswordDigits = {
  first: string;
  second: string;
};

export type CardType =
  | "none"
  | "포코"
  | "준"
  | "현석"
  | "윤호"
  | "환오"
  | "태은"
  | "준일"
  | "은규";
