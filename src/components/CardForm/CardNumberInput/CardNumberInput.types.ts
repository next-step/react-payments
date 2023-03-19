import { ColorType, CardFormInputsType } from 'types';
export type CardNumberInputProps = {
  onChange?: () => void;
  isValid: boolean;
  fontColor: ColorType;
  refs: CardFormInputsType;
};
