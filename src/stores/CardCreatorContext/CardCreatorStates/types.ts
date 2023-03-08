import { InputStateType, CardNumber, CardOwner, ExpireDate, Password, SecurityCode } from '@/types';
import type { CardCompanyModel } from '@/pages/CardCreator/hooks/useCardCompanySelectModal';

export type CardCompanyState = Omit<InputStateType<CardCompanyModel>, 'placeholder' | 'type' | 'checkIsAllowInput'>;

export type CardNumbersState = Omit<InputStateType<CardNumber>, 'placeholder'>[];

export type CardOwnersState = Omit<InputStateType<CardOwner>, 'type'>[];

export type ExpireDatesState = Omit<InputStateType<ExpireDate>, 'type'>[];

export type SecurityCodesState = Omit<InputStateType<SecurityCode>, 'placeholder'>[];

export type PasswordsState = Omit<InputStateType<Password>, 'type' | 'placeholder'>[];

export type CardNicknameState = Omit<InputStateType<Password>, 'type' | 'placeholder' | 'checkIsAllowInput'>;
