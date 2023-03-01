export enum CardCompany {
  Shinhan = '신한',
  Hana = '하나',
  Woori = '우리',
  Kb = '국민',
  Lotte = '롯데',
  Nh = '농협',
  Samsung = '삼성',
  Hyundai = '현대',
}

export type ExpiredDate = {
  year: string;
  month: string;
};

export type CardNumber = {
  num1: string;
  num2: string;
  num3: string;
  num4: string;
};

export type CardPassword = {
  password1: string;
  password2: string;
};

export interface CardType {
  cardOwner: string;
  cardNumber: CardNumber;
  expiredDate: ExpiredDate;
  company: CardCompany;
  alias?: string;
}
