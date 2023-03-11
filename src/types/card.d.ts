// FIXME: type
export type Card = {
  [key: string]: any;
  cardNumber: CardNumber;
  cardExpiration: CardExpiration;
  cardOwnerName: CardOwnerName;
  cardSecretCode: CardSecretCode;
  cardPassword: CardPassword;
  cardCompany: CardCompany;
  cardAlias: CardAlias;
};

export type CardNumber = {
  num1: string;
  num2: string;
  num3: string;
  num4: string;
};

export type CardExpiration = {
  month: string;
  year: string;
};

export type CardOwnerName = string;

export type CardSecretCode = string;

export type CardPassword = {
  num1: string;
  num2: string;
};

export type CardCompany = {
  name: string;
  color: string;
};

export type CardAlias = string;
