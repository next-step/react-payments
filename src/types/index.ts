export interface Expiration {
  month: string;
  year: string;
}

type CardNumbers = 'cardNumber1' | 'cardNumber2' | 'cardNumber3' | 'cardNumber4';
export type CardNumber = Record<CardNumbers, string>;

export interface Password {
  password1: string;
  password2: string;
}

export type CardInformation = Expiration &
  Password &
  CardNumber & {
    id: string;
    cvc: string;
    cardOwner?: string;
    nickname?: string;
    cardCompany?: string;
  };

export type CardInformationWithoutId = Omit<CardInformation, 'id'>;

export type Destination = '/' | '/add' | '/complete';

export type CardList = CardInformation[];
