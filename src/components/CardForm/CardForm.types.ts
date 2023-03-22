import { CardUIType, CardFormInputRefsType } from 'types';

export type CardFormProps = {
  cardUI: CardUIType;
  refs: CardFormInputRefsType;
  onCardNumberInput: () => void;
  onExpireMonthInput: () => void;
  onExpireYearInput: () => void;
  onOwnerNameInput: () => void;
};
