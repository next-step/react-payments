export type CardInfoType = {
  cardNumber: {
    section1: number | null;
    section2: number | null;
    section3: number | null;
    section4: number | null;
  };
  expiryDate: {
    MM: number | null;
    YY: number | null;
  };
  cardOwnerName: string;
  securityCode: number | null;
  cardPassword: {
    section1: number | null;
    section2: number | null;
    section3: number | null;
    section4: number | null;
  };
  cardName: string | null;
  cardNickName: string | null;
};

type CardNumberType = {
  section1: number | null;
  section2: number | null;
  section3: number | null;
  section4: number | null;
};

export type SmallCreditCardType = {
  cardName: string | null;
  cardNumber: CardNumberType | null;
  cardOwnerName: string | null;
  expiryDate: {
    MM: number | null;
    YY: number | null;
  };
};
