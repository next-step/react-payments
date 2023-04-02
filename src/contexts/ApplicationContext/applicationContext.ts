import { createContext } from 'react';

import type { TApplicationContextValue } from './type';

export const ApplicationContext = createContext<TApplicationContextValue | null>(null);
