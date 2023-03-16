import { InputStateType, CardNumber, CardOwner, ExpireDate, Password, SecurityCode, CardNickname } from '@/types';
import type { TCardCompany } from '@/pages/CardCreator/hooks/useCardCompanySelectModal';

export type CardCompanyState = Omit<InputStateType<TCardCompany>, 'placeholder' | 'type' | 'checkIsAllowInput'>;

export type CardNumberState = Omit<InputStateType<CardNumber>, 'placeholder'>;
export type CardNumbersState = CardNumberState[];

export type CardOwnerState = Omit<InputStateType<CardOwner>, 'type'>;
export type CardOwnersState = CardOwnerState[];

export type ExpireDateState = Omit<InputStateType<ExpireDate>, 'type'>;
export type ExpireDatesState = ExpireDateState[];

export type SecurityCodeState = Omit<InputStateType<SecurityCode>, 'placeholder'>;
export type SecurityCodesState = SecurityCodeState[];

export type PasswordState = Omit<InputStateType<Password>, 'type' | 'placeholder'>;
export type PasswordsState = PasswordState[];

export type CardNicknameState = Omit<InputStateType<CardNickname>, 'type' | 'placeholder' | 'checkIsAllowInput'>;

export type UnionInputState =
  | CardCompanyState
  | CardNumberState
  | CardOwnerState
  | ExpireDateState
  | SecurityCodeState
  | PasswordState
  | CardNicknameState;
