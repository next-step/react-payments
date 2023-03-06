type ExpirationKey = 'month' | 'year';
export type Expiration = Record<ExpirationKey, string>;

type CardNumberKey = 'cardNumber1' | 'cardNumber2' | 'cardNumber3' | 'cardNumber4';
export type CardNumber = Record<CardNumberKey, string>;

type PasswordKey = 'password1' | 'password2';
export type Password = Record<PasswordKey, string>;

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
