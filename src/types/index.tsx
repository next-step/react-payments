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
export type FontSizeType = "xs" | "s" | "m" | "lg" | "2x";
export type FontWeightType = "normal" | "bold";

export interface CardFormType {
  cardNumbers: {
    text: string;
    isValid: boolean;
  };
  expireDate: {
    month: {
      text: string;
      isValid: boolean;
    };
    year: {
      text: string;
      isValid: boolean;
    };
  };
  password: {
    one: string;
    two: string;
    isValid: boolean;
  };
  cvc: {
    text: string;
    isValid: boolean;
  };
  ownerName: {
    text: string;
    isValid: boolean;
  };
  color: {
    text: ColorType;
    isValid: boolean;
  };
  company: {
    text: CompanyType;
    isValid: boolean;
  };
}
export type CardType = {
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
  alias: string;
  id: string;
};
