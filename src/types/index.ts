export interface Expiration {
  month: string;
  year: string;
}

export interface CardNumber {
  cardNumber1: string;
  cardNumber2: string;
  cardNumber3: string;
  cardNumber4: string;
}

export interface Password {
  password1: string;
  password2: string;
}

export type CardInformation = Expiration &
  Password &
  CardNumber & {
    cvc: string;
    cardOwner?: string;
    nickname?: string;
    cardCompany?: string;
  };

export type Destination = '/' | '/add' | '/complete';

export type CardList = CardInformation[];
