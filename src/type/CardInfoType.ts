export type CardInfoType = {
  cardNumber: {
    section1: number | "";
    section2: number | "";
    section3: number | "";
    section4: number | "";
  };
  expiryDate: {
    MM: number | "";
    YY: number | "";
  };
  cardOwnerName: string;
  securityCode: number | "";
  cardPassword: {
    section1: number | "";
    section2: number | "";
    section3: number | "";
    section4: number | "";
  };
  cardName: string | null;
  cardNickName: string | null;
};

type CardNumberType = {
  section1: number | "";
  section2: number | "";
  section3: number | "";
  section4: number | "";
};

export type SmallCreditCardType = {
  cardName: string | null;
  cardNumber: CardNumberType | "";
  cardOwnerName: string | null;
  expiryDate: {
    MM: number | "";
    YY: number | "";
  };
};
