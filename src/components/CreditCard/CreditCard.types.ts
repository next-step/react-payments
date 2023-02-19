import { theme } from 'styles/theme';

export interface CreditCardProps {
  color: keyof typeof theme.color;
  name?: string;
  number?: string;
  holderName?: string;
  expiration?: string;
}
