import React from 'react';

import Router from './router';
import { CardProvider } from './stores/CardContext';
import { ErrorContextProvider } from './stores/ErrorContext';

export function App() {
  return (
    <ErrorContextProvider>
      <CardProvider>
        <Router />
      </CardProvider>
    </ErrorContextProvider>
  );
}
