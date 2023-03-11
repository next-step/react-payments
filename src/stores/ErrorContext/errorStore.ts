import { createContext } from 'react';
import type { DispatchContext, ReducerReturnType } from '../types';

type ErrorStore = { type: string | null; message: string | null };

export const initialErrorStore: ErrorStore = {
  type: null,
  message: null,
} as const;

export function reducer(store: typeof initialErrorStore, action: ErrorStore) {
  return { ...action };
}

type ErrorReducerType = ReducerReturnType<typeof reducer>;
type ErrorStoreFromReducer = ErrorReducerType[0];
type Dispatch = ErrorReducerType[1];
type ErrorStoreContextType = ErrorStoreFromReducer;
type ErrorApiContextType = DispatchContext<Dispatch>;

export const ErrorStoreContext = createContext<ErrorStoreContextType>({ type: null, message: null });
export const ErrorApiContext = createContext<ErrorApiContextType>(null);
