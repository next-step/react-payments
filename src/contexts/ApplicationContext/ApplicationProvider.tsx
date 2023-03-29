import React, { PropsWithChildren, useMemo } from 'react';

import { isNil } from '@/utils';

import { localStorageService, checkCardListServiceObject } from './service';
import { TApplicationContextValue } from './type';
import { ApplicationContext } from './applicationContext';

export interface ApplicationProviderProps extends Partial<TApplicationContextValue> {}

export function ApplicationProvider({
  onCardConfirmClick = (card) => console.log(card),
  service = localStorageService,
  children,
}: PropsWithChildren<ApplicationProviderProps>) {
  const AppContextValue = useMemo(() => {
    if (!isNil(service)) {
      checkCardListServiceObject(service);
    }

    return { onCardConfirmClick, service };
  }, [onCardConfirmClick, service]);

  return <ApplicationContext.Provider value={AppContextValue}>{children}</ApplicationContext.Provider>;
}
