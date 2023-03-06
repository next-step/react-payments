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

// eslint-disable-next-line @typescript-eslint/ban-types
type ExctractParams<Path> = Path extends `:${infer Param}` ? Record<Param, string> : {};

export type CompleteDestination = ExctractParams<'/complete/:id'>;

export type Destination = '/' | '/add' | CompleteDestination;

export type CardList = CardInformation[];
