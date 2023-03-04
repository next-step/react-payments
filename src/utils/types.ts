export interface ICardInfo {
  id?: string;
  title: string;
  bgColor: string;
  creditNumber: string;
  customerName: string;
  expirationDate: string;
  alias?: string;
}

export interface INewCard {
  creditNumber: string;
  expirationDate: string;
  customerName: string;
  cvc: string;
  firstPassword: string;
  secondPassword: string;
  bankTitle: string;
  bgColor: string;
  alias?: string;
}

export interface INewCardBank {
  title: string;
  bgColor: string;
}
