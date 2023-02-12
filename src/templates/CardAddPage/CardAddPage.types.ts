import type { FormGetNameValidatorCallbackProps } from 'components';
import type { CardThemeKeys, CardThemeTypes } from 'literal';

export type HandlerType<T = void> = (data: FormGetNameValidatorCallbackProps) => T;

export type CardNumberChangeHandlerProps = HandlerType<{
  theme: CardThemeTypes;
  cardNumber: string;
  isValidLength: boolean;
}>;

export type CardExpirationChangeHandlerProps = HandlerType<{
  cardExpiration: string;
  isValidLength: boolean;
}>;

export type CardCompanyModalProps = {
  open: boolean;
  onClose: (event: KeyboardEvent | MouseEvent) => void;
  onSelect: (params: { className: CardThemeTypes; company: CardThemeKeys }) => void;
};
