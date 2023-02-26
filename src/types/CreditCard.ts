export interface CreditCardType {
  number: string;
  holderName: string;
  expiration: string;
  cvc: string;
  password: string[];
}

export type PartialCreditCardType = Partial<CreditCardType>;
