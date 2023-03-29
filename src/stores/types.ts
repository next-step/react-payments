import type { Reducer, useReducer } from 'react';

// @ts-ignore
// eslint-disable-next-line
export type ReducerReturnType<T> = ReturnType<typeof useReducer<Reducer<Parameters<T>[0], Parameters<T>[1]>>>;

export type DispatchContext<T> = { dispatch: T } | null;

// 하나의 InputElement에 해당하는 타입
export interface InputElement<T = string> {
  value?: T;
  errorMessage?: string;
  ref?: HTMLInputElement | null;
  setRef: (ref?: HTMLInputElement | null) => void;
  validateValue: (value?: T) => string | void;
  isAllowToFocusNext: () => boolean;
}
