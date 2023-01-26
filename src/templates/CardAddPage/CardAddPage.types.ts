import type { FormGetNameValidatorCallbackProps } from 'components';
import type { 카드_테마_타입 } from 'literal';

export type HandlerType<T = void> = (data: FormGetNameValidatorCallbackProps) => T;

export type CardNumberChangeHandlerProps = HandlerType<{
  theme: 카드_테마_타입;
  cardNumber: string;
  isValidLength: boolean;
}>;

export type CardExpirationChangeHandlerProps = HandlerType<{
  cardExpiration: string;
  isValidLength: boolean;
}>;
