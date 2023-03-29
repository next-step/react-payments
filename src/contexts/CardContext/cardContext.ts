import { createContext } from 'react';

import type { TCardStore } from './initialCardStore';

import { cardStoreReducer } from './cardStoreReducer';
import { DispatchContext, ReducerReturnType } from '../types';

type TCardReducer = ReducerReturnType<typeof cardStoreReducer>;
type TDispatch = TCardReducer[1];
type TCardCompanyStoreContext = TCardStore | null;
type TApiContext = DispatchContext<TDispatch>;

export const CardContext = createContext<TCardCompanyStoreContext>(null);
export const CardApiContext = createContext<TApiContext>(null);
