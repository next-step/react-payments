export type CardNumber = [string, string, string, string];

export type ExpirationDate = { month: string; year: string };

export type CardCompany = { name: string; color: string };

export type CardPassword = string[];

export type CardInfo = {
  id?: number;
  cardNumbers: CardNumber;
  cardExpiration: ExpirationDate;
  cardOwnerName: string;
  cvc: string;
  password: CardPassword;
  cardCompany: CardCompany;
  cardNickName?: string;
}