import type { Reducer, useReducer } from 'react';

// @ts-ignore
// eslint-disable-next-line
export type ReducerReturnType<T> = ReturnType<typeof useReducer<Reducer<Parameters<T>[0], Parameters<T>[1]>>>;

export type DispatchContext<T> = { dispatch: T } | null;

export interface IInputState<T = string> {
  value?: T;
  isValidate?: boolean;
}

// 하나의 InputElement에 해당하는 타입
export interface IInputElement<T = string> extends IInputState<T> {
  index: number;
  ref?: HTMLInputElement | null;
  setRef: (ref?: HTMLInputElement | null) => void;
}
