import React from 'react';

import Router from './router';
import { CardInfoProvider } from './stores/cardCreator';
import { ErrorContextProvider } from './stores/ErrorContext';

function App() {
  return (
    <ErrorContextProvider>
      <CardInfoProvider>
        <Router />
      </CardInfoProvider>
    </ErrorContextProvider>
  );
}

export { App };
