import type { ThemeKeys } from 'styles/theme';

export interface CreditCardProps {
  color?: ThemeKeys;
  nickname?: string;
  number?: string;
  holderName?: string;
  expiration?: string;
}
