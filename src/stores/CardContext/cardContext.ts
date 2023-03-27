import { createContext } from 'react';

import type { TCardStore } from './initialCardStore';

import { cardStoreReducer } from './cardStoreReducer';
import { DispatchContext, ReducerReturnType } from '../types';

type CardReducerType = ReducerReturnType<typeof cardStoreReducer>;
type Dispatch = CardReducerType[1];
type CardCompanyStoreContextType = TCardStore | null;
type ApiContextType = DispatchContext<Dispatch>;

export const CardContext = createContext<CardCompanyStoreContextType>(null);
export const ApiContext = createContext<ApiContextType>(null);
