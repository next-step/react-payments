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

export interface CardFormType {
  cardNumbers: {
    text: string;
    isValid: boolean;
  };
  expireDateMonth: {
    text: string;
    isValid: boolean;
  };
  expireDateYear: {
    text: string;
    isValid: boolean;
  };
  password: {
    start: {
      text: string;
      isValid: boolean;
    };
    end: {
      text: string;
      isValid: boolean;
    };
  };
  cvc: {
    text: string;
    isValid: boolean;
  };
  ownerName: {
    text: string;
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
    start: string;
    end: string;
  };
  cvc: string;
  ownerName: string;
  company: CompanyType;
  alias: string;
  id: string;
};

export type CardFormInputsType = {
  cardNumbers: HTMLInputElement | null;
  expireDateMonth: HTMLInputElement | null;
  expireDateYear: HTMLInputElement | null;
  cvc: HTMLInputElement | null;
  ownerName: HTMLInputElement | null;
  password: {
    start: HTMLInputElement | null;
    end: HTMLInputElement | null;
  };
};
