import React, { PropsWithChildren, useMemo } from 'react';

import { localStorageService } from './localStorageService';
import { TApplicationContextValue } from './type';
import { ApplicationContext } from './serviceContext';

export interface ApplicationProviderProps extends Partial<TApplicationContextValue> {}

export function ApplicationProvider({
  onCardConfirmClick = (card) => console.log(card),
  service = localStorageService,
  children,
}: PropsWithChildren<ApplicationProviderProps>) {
  const AppContextValue = useMemo(() => {
    return { onCardConfirmClick, service };
  }, [onCardConfirmClick, service]);

  return <ApplicationContext.Provider value={AppContextValue}>{children}</ApplicationContext.Provider>;
}
