import { ColorType, CardFormInputsType } from 'types';

export type CardOwnerNameInputProps = {
  fontColor: ColorType;
  onChange?: () => void;
  refs: CardFormInputsType;
  length: number;
};
