import { ColorType, CardFormInputsType } from 'types';

export type CardExpirationDateInputProps = {
  onChangeMonth?: () => void;
  onChangeYear?: () => void;

  fontColor: ColorType;
  refs: CardFormInputsType;
  isValidMonth: boolean;
  isValidYear: boolean;
};
