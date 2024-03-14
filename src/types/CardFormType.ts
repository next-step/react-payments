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

export type CardType = {
  cardNumber: CardNumberType;
  expirationDate: ExpirationDateType;
  ownerName: string;
  securityCode: string;
  cardPassword: CardPasswordNumberType;
  cardAlias?: string;
};

export type CardFulledType = {
  cardNumber: CardNumberType;
  expirationDate: ExpirationDateType;
  securityCode: string;
  cardPassword: CardPasswordNumberType;
};
