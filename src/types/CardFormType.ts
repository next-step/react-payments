export type CardPasswordNumberType = {
  firstNumber: string;
  secondNumber: string;
};

export type CardNumberType = {
  thirdNumber: string;
  fourthNumber: string;
} & CardPasswordNumberType;

export type ExpirationDateType = {
  month: string;
  year: string;
};

export type CardFulledType = {
  cardNumber: CardNumberType;
  expirationDate: ExpirationDateType;
  securityCode: string;
  cardPassword: CardPasswordNumberType;
};

export type CardType = {
  id: number;
  cardCompany: string;
  cardCompanyColor: string;
  ownerName: string;
  cardAlias: string;
} & CardFulledType;
