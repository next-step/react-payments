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
};
