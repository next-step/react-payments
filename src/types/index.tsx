export type ColorType = 'red' | 'blue' | 'green' | 'pink' | 'purple' | 'cyon' | 'yellow' | 'orange' | '';
export type CompanyType =
  | '하나카드'
  | '국민카드'
  | '신한카드'
  | '클린카드'
  | '토스카드'
  | '네이버카드'
  | '카카오카드'
  | '오렌지카드'
  | '';
export type FontSizeType = 'xs' | 's' | 'm' | 'lg' | 'xl';
export type FontWeightType = 'normal' | 'bold';

export interface CardUIType {
  cardNumbers: string;
  expireDateMonth: string;
  expireDateYear: string;
  ownerName: string;
  company: CompanyType;
}
export type CardType = {
  cardNumbers: string;
  expireDate: {
    month: string;
    year: string;
  };
  ownerName: string;
  company: CompanyType;
  alias: string;
  id: string;
};

export type CardFormInputRefsType = {
  cardNumbers: HTMLInputElement | null;
  expireDateMonth: HTMLInputElement | null;
  expireDateYear: HTMLInputElement | null;
  cvc: HTMLInputElement | null;
  ownerName: HTMLInputElement | null;
  password: HTMLInputElement | null;
};

export interface CardValidationType extends CardUIType {
  password: string | undefined;
  cvc: string | undefined;
}
