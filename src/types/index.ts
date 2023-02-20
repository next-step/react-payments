export type WithChild = {
  children: React.ReactNode;
};
export type StrictPropsWithChildren<P = unknown> = P & WithChild;

export type CardObj = {
  val: unknown;
  isValid?: boolean;
};

export const enum CardKey {
  CARD_NUMBERS = 'CARD_NUMBERS',
  EXPIRE_DATE = 'EXPIRE_DATE',
  CVC = 'CVC',
  PASSWORD = 'PASSWORD',
  OWNER_NAME = 'OWNER_NAME',
}
