import React from 'react';

import Router from './router';
import { CardInfoProvider } from './stores/CardContext';
import { ErrorContextProvider } from './stores/ErrorContext';

export function App() {
  return (
    <ErrorContextProvider>
      <CardInfoProvider>
        <Router />
      </CardInfoProvider>
    </ErrorContextProvider>
  );
}
