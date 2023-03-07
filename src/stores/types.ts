import type { Reducer, useReducer } from 'react';

// @ts-ignore
// eslint-disable-next-line
export type ReducerReturnType<T> = ReturnType<typeof useReducer<Reducer<Parameters<T>[0], Parameters<T>[1]>>>;

export type StoreContext<T> = { store: T } | null;
export type DispatchContext<T> = { dispatch: T } | null;
