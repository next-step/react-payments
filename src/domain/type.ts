export type CardNumbersType = Partial<{
  first: string;
  second: string;
  third: string;
  fourth: string;
}>;

export type CardStateType = Partial<{
  cardNumbers: CardNumbersType;
  securityCode: string;
  firstCardPassword: string;
  secondCardPassword: string;
  ownerName: string;
  month: string;
  year: string;
  nickname: string;
}>;
export type Route = 'CARD' | 'LIST' | 'COMPLETE';

export type CardBrand = {
  cardBrandName: string;
  color: string;
  pattern: string[];
};
