import React from 'react';

import { CardProvider } from '@/contexts/CardContext';
import { ApplicationProvider, ApplicationProviderProps } from '@/contexts/ApplicationContext';
import Router from '@/router';

interface AppProps extends ApplicationProviderProps {}

export function App(props: AppProps) {
  return (
    <ApplicationProvider {...props}>
      <CardProvider>
        <Router />
      </CardProvider>
    </ApplicationProvider>
  );
}
