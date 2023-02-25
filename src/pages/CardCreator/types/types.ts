import { InputStateType } from '@/types/types';

export type CardNumbersState = Omit<InputStateType<string>, 'placeholder'>[];

export type CardOwnersState = Omit<InputStateType<string>, 'placeholder'>[];

export type ExpireDatesState = Omit<InputStateType<string>, 'type'>[];

export type SecurityCodesState = Omit<InputStateType<string>, 'placeholder'>[];

export type PasswordsState = Omit<InputStateType<string>, 'type' | 'placeholder'>[];
