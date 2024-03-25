export interface CardType {
  id: number;
  type: string;
  color: string;
}

export interface CardInfo {
  id: string;
  cardName: string;
  cardType: string;
  cardNumber1: string;
  cardNumber2: string;
  cardNumber3: string;
  cardNumber4: string;
  expireDate: string;
  cardOwner: string;
  cvc: string;
  firstPassword: string;
  secondPassword: string;
}
