import type { InputHTMLAttributes } from 'react';

type InputStateType<T> = {
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  key: string;
  value?: T;
  placeholder?: string;
};

export type CardNumbersState = Omit<InputStateType<string>, 'placeholder'>[];

export type ExpireDatesState = Omit<InputStateType<string>, 'type'>[];

export type PasswordsState = Omit<InputStateType<string>, 'type' | 'placeholder'>[];
