export type CardNumber = [string, string, string, string];
export type ExpireDate = [string, string];
export type Password = [string, string];

export interface Card {
  cardNumber: CardNumber;
  expireDate: ExpireDate;
  userName?: string;
  CVC: string;
  password: Password;
}
