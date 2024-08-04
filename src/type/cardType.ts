type CardCompanyType =
  | 'none'
  | '신한 카드'
  | '삼성 카드'
  | '하나 카드'
  | '국민 카드'
  | '우리 카드'
  | '비씨 카드'
  | '현대 카드'
  | '롯데 카드';

export type CardCompany = {
  id: number;
  name: CardCompanyType;
  color: string;
};

export interface Card {
  id: number;
  updatedAt?: Date;
  cardCompany?: CardCompanyType;
  cardAlias?: string;
  cardNumber1: string;
  cardNumber2: string;
  cardNumber3: string;
  cardNumber4: string;
  expirationMonth: string;
  expirationYear: string;
  cardHolderName?: string;
  verificationCode: string;
  pinNumber1: string;
  pinNumber2: string;
}
