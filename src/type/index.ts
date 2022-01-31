export type CardNumber = [string, string, string, string];
export type ExpirationNumber = [string, string];
export type Password = [string, string];

export interface Company {
  color: string;
  name: string;
}

export interface Card {
  cardNumber: CardNumber;
  expirationNumber: ExpirationNumber;
  ownerName: string;
  cvc: string;
  password: Password;
  company: Company;
  alias: string;
}
