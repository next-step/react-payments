import type { InputHTMLAttributes } from 'react';

export type InputStateType<T = string> = {
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  key: string;
  value?: T;
  placeholder?: string;
  checkIsValid: (value?: T) => boolean;
  checkIsAllowInput: (input?: T) => boolean;
};
