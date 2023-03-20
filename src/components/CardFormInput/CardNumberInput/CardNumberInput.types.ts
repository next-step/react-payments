import { ColorType, CardFormInputRefsType } from 'types';
export type CardNumberInputProps = {
  onChange?: () => void;
  isValid: boolean;
  fontColor: ColorType;
  refs: CardFormInputRefsType;
};
