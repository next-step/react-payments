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
    first: {
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
    first: string;
    end: string;
  };
  cvc: string;
  ownerName: string;
  color: ColorType;
  company: CompanyType;
  alias: string;
  id: string;
};

export type CardFormInputsType = {
  cardNumbers: {
    ref: HTMLInputElement | null;
  };
  expireDate: {
    month: {
      ref: HTMLInputElement | null;
    };
    year: {
      ref: HTMLInputElement | null;
    };
  };
  cvc: {
    ref: HTMLInputElement | null;
  };
  ownerName: {
    ref: HTMLInputElement | null;
  };
  password: {
    first: {
      ref: HTMLInputElement | null;
    };
    end: {
      ref: HTMLInputElement | null;
    };
  };
};
