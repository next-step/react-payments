import type { ThemeKeys } from 'styles/theme';
import type { Company } from 'constants/Card';

export interface CreditCardType {
  color: ThemeKeys;
  nickname: Company;
  number: string;
  holderName: string;
  expiration: string;
  cvc: string;
  password: string[];
}

export type PartialCreditCardType = Partial<CreditCardType>;
