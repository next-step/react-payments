import { ColorType, CardFormInputsType } from 'types';
export type CardPasswordInputProps = {
  fontColor: ColorType;
  onChange?: () => void;
  refs: CardFormInputsType;
  isValid: boolean;
};
