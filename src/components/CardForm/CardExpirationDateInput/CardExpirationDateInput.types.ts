import { ColorType, CardFormInputRefsType } from 'types';

export type CardExpirationDateInputProps = {
  onChangeMonth?: () => void;
  onChangeYear?: () => void;

  fontColor: ColorType;
  refs: CardFormInputRefsType;
  isValidMonth: boolean;
  isValidYear: boolean;
};
