export interface CardCompany {
  name: string;
  color: string;
}

export interface CardNumbers {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

export interface CardExpiration {
  month: string;
  year: string;
}

export type CardName = string;

export type CardNickname = string;

export type CardSecurityCode = string;

export interface CardPassword {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

export interface Card {
  id: number;
  cardNumbers: CardNumbers;
  cardExpiration: CardExpiration;
  cardName: CardName;
  cardNickname: string;
}
