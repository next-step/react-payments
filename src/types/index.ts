type ExpirationKey = 'month' | 'year';
export type Expiration = Record<ExpirationKey, string>;

type CardNumberKey = 'cardNumber1' | 'cardNumber2' | 'cardNumber3' | 'cardNumber4';
export type CardNumber = Record<CardNumberKey, string>;

type PasswordKey = 'password1' | 'password2';
export type Password = Record<PasswordKey, string>;

export type CardInformation = Expiration &
  Password &
  CardNumber & {
    id: string;
    cvc: string;
    cardOwner?: string;
    nickname?: string;
    cardCompany?: string;
  };

export type CardInformationWithoutId = Omit<CardInformation, 'id'>;

export type Destination = '/' | '/add' | '/complete';

export type CardList = CardInformation[];

export type CompanyColorClassName =
  | 'bg-amber-400'
  | 'bg-lime-400'
  | 'bg-green-400'
  | 'bg-cyan-400'
  | 'bg-indigo-400'
  | 'bg-pink-400'
  | 'bg-rose-400'
  | 'bg-blue-400'
  | 'bg-red-400';

export type CompanyColorHexCode =
  | '#fbbf24'
  | '#a3e635'
  | '#4ade80'
  | '#22d3ee'
  | '#818cf8'
  | '#f472b6'
  | '#fb7185'
  | '#60a5fa'
  | '#f87171';

export type CardCompany = {
  companyName: string;
  companyColorClassName: CompanyColorClassName;
  companyColorHexCode: CompanyColorHexCode;
  companyIdentification: string;
};

export type ModalType = 'cardCompanySelectModal';
