import { ColorType, CardFormInputsType } from 'types';

export type CardPasswordInputProps = {
  fontColor: ColorType;
  onChange?: () => void;
  isValidStart: boolean;
  isValidEnd: boolean;
  refs: CardFormInputsType;
};
