import { ColorType, CardFormInputRefsType } from 'types';

export type CardOwnerNameInputProps = {
  fontColor: ColorType;
  onChange?: () => void;
  refs: CardFormInputRefsType;
  length: number;
};
