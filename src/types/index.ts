type CardInformation = {
  cardNumber1: string;
  cardNumber2: string;
  cardNumber3: string;
  cardNumber4: string;
  year: string;
  month: string;
  cvc: string;
  password1: string;
  password2: string;
  cardOwner?: string;
  nickname?: string;
  cardCompany?: string;
};

type Expiration = {
  month: string;
  year: string;
};

type CardNumber = {
  cardNumber1: string;
  cardNumber2: string;
  cardNumber3: string;
  cardNumber4: string;
};

type Password = {
  password1: string;
  password2: string;
};

export type { CardInformation, Expiration, CardNumber, Password };
