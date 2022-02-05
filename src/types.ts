export type CardNumber = [string, string, string, string];
export type ExpireDate = [string, string];
export type Password = [string, string];

export interface CardForm {
  cardNumber: CardNumber;
  expireDate: ExpireDate;
  userName?: string;
  CVC: string;
  password: Password;
}

export interface Card {
  id: string;
  cardNumber: string;
  expireDate: Date;
  userName?: string;
  CVC: string;
  password: string;
  nickname: string | null;
  createdAt: Date;
}
