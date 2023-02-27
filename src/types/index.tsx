export type ColorType = "red" | "blue" | "green" | "pink" | "purple" | "cyon" | "yellow" | "orange" | "" | "primary";
export type CompanyType =
  | "하나카드"
  | "국민카드"
  | "신한카드"
  | "클린카드"
  | "토스카드"
  | "네이버카드"
  | "카카오카드"
  | "오렌지카드"
  | "";
export type FontSizeType = "xs" | "s" | "m" | "lg" | "2x";
export type FontWeightType = "normal" | "bold";

export interface CardFormType {
  cardNumbers: string;
  expireDate: {
    month: string;
    year: string;
  };
  password: {
    one: string;
    two: string;
  };
  cvc: string;
  ownerName: string;
  color: ColorType;
  company: CompanyType;
}
export interface NewCardType extends CardFormType {
  alias: string;
  id: string;
}
