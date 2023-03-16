import { ColorType, CardFormInputsType } from 'types';

export type CardExpirationDateInputProps = {
  onChange?: () => void;
  fontColor: ColorType;
  refs: CardFormInputsType;
  isValidMonth: boolean;
  isValidYear: boolean;
};
