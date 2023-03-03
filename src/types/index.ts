export type WithChild = {
  children: React.ReactNode;
};
export type StrictPropsWithChildren<P = unknown> = P & WithChild;

export type CardNumber = {
  1: string;
  2: string;
  3: string;
  4: string;
};

export type Password = {
  1: string;
  2: string;
};

export type ExpireDate = {
  month: string;
  year: string;
};

export type CVC = {
  val: string;
};

export type OwnerName = {
  val: string;
};

export type Validation<T> = T & { isValid: boolean };

export const enum CardKey {
  CARD_NUMBERS = 'CARD_NUMBERS',
  EXPIRE_DATE = 'EXPIRE_DATE',
  CVC = 'CVC',
  PASSWORD = 'PASSWORD',
  OWNER_NAME = 'OWNER_NAME',
  UID = 'UID',
  NICK_NAME = 'NICK_NAME',
  CREATE_DATE = 'CREATE_DATE',
}
export type CardData = {
  [CardKey.CARD_NUMBERS]: CardNumber;
  [CardKey.EXPIRE_DATE]: ExpireDate;
  [CardKey.CVC]: CVC;
  [CardKey.PASSWORD]: Password;
  [CardKey.OWNER_NAME]: OwnerName;
  [CardKey.UID]: string;
  [CardKey.NICK_NAME]: string;
  [CardKey.CREATE_DATE]: string;
};

export type CardFormType = {
  [CardKey.CARD_NUMBERS]: Validation<CardNumber>;
  [CardKey.EXPIRE_DATE]: Validation<ExpireDate>;
  [CardKey.CVC]: Validation<CVC>;
  [CardKey.PASSWORD]: Validation<Password>;
  [CardKey.OWNER_NAME]: Validation<OwnerName>;
};
