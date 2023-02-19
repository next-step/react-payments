import type { InputHTMLAttributes } from 'react';

type InputStateType = {
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  key: string;
  value?: number;
  placeholder?: string;
};

export type CardNumbersState = Omit<InputStateType, 'placeholder'>[];

export type ExpireDatesState = Omit<InputStateType, 'type'>[];

export type PasswordsState = Omit<InputStateType, 'type' | 'placeholder'>[];
