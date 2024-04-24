export interface CardNumber {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

export interface CardExpirationDate {
  MM: string;
  YY: string;
}

export interface CardPassword {
  first: string;
  second: string;
}

export interface CardInputInterface {
  companyName: string;
  cardNumber: CardNumber;
  expirationDate: CardExpirationDate;
  ownerName: string;
  securityCode: string;
  password: CardPassword;
  nickname: string;
}
