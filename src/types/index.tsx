export type ColorType = "red" | "blue" | "green" | "pink" | "purple" | "cyon" | "yellow" | "orange" | "";
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
export type FontSizeType = "xs" | "s" | "m" | "lg";
export type FontWeightType = "normal" | "bold";

export interface CardStateType {
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
