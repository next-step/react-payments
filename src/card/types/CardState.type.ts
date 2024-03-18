export type CardNumberElement = `${number}${number}${number}${number}`;
export type CardNumber = `${CardNumberElement} ${CardNumberElement} ${CardNumberElement} ${CardNumberElement}`;

export type ExpirationMonth = `${0}${number}` | `1${0 | 1 | 2}`;
export type ExpirationYear = `${number}${number}`;
export type ExpirationDate = `${ExpirationMonth} ${ExpirationYear}`;

export type Password = `${number}${number}${number}${number}`;

export type SecurityCode = `${number}${number}${number}`;

export type CardState = {
  cardNumber: CardNumber;
  expirationDate: ExpirationDate;
  ownerName: string;
  securityCode: SecurityCode;
  password: Password;
  label: string;
  color: string;
  description: string;
  createdTimestamp: number;
};
