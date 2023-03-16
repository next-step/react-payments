import type { InputHTMLAttributes } from 'react';

export interface CommonInputStateType {
  ref?: HTMLInputElement | null;
  setRef?: (this: CommonInputStateType, ref?: HTMLInputElement | null) => void;
}

export interface InputStateType<T = string> extends CommonInputStateType {
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  key: string;
  value?: T;
  placeholder?: string;
  ref?: HTMLInputElement | null;
  checkIsValid: (this: Partial<InputStateType<T>>) => boolean;
  checkIsAllowInput: (input?: T) => boolean;
  checkIsInputFinished?: (this: Partial<InputStateType<T>>) => boolean;
  getPOJO: (this: Partial<InputStateType<T>>) => { value?: T; type?: InputHTMLAttributes<HTMLInputElement>['type'] };
}

export type CardNumber = string;

export type CardOwner = string;

export type ExpireDate = string;

export type SecurityCode = string;

export type Password = string;

export type CardNickname = string;
