export type CardNumbersType = {
  first?: string;
  second?: string;
  third?: string;
  fourth?: string;
};

export type CardStateType = {
  cardNumbers?: CardNumbersType;
  securityCode?: string;
  firstCardPassword?: string;
  secondCardPassword?: string;
  ownerName?: string;
  month?: string;
  year?: string;
};
