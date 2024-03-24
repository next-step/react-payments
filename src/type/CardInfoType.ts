export type CardInfoType = {
  cardNumber: cardNumber;
  expiryDate: expiryDate;
  cardOwnerName: cardOwnerName;
  securityCode: securityCode;
  cardPassword: cardPassword;
  cardName: cardName;
  cardNickName: cardNickName;
  createdAt: createdAt;
  key: KeyType;
};

export type KeyType = string;

export type cardNumber = {
  section1: number | "";
  section2: number | "";
  section3: number | "";
  section4: number | "";
};

export type securityCode = number | "";
export type cardName = string | null;
export type createdAt = string | null;

export type expiryDate = {
  MM: number | "";
  YY: number | "";
};

export type cardPassword = {
  section1: number | "";
  section2: number | "";
  section3: number | "";
  section4: number | "";
};

export type cardOwnerName = string | null;

export type cardNickName = string | null;

export type SmallCreditCardType = {
  cardName: cardName;
  cardNumber: cardNumber;
  cardOwnerName: cardOwnerName;
  expiryDate: expiryDate;
  cardNickName: cardNickName;
};

export type EnhancedSmallCreditCardType = SmallCreditCardType & {
  onClick?: (param?: string) => void;
};
