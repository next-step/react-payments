import type { ThemeKeys } from 'styles/theme';

export interface CreditCardProps {
  color: ThemeKeys;
  name?: string;
  number?: string;
  holderName?: string;
  expiration?: string;
}
