import type { InputHTMLAttributes } from 'react';

export type InputStateType<T = string> = {
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  key: string;
  value?: T;
  placeholder?: string;
  checkIsValid: (value?: T) => boolean;
  checkIsAllowInput: (input?: T) => boolean;
};

export type CardNumber = string;

export type CardOwner = string;

export type ExpireDate = string;

export type SecurityCode = string;

export type Password = string;
