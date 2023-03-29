import React from 'react';

import Router from './router';
import { CardProvider } from './contexts/CardContext';

export function App() {
  return (
    <CardProvider>
      <Router />
    </CardProvider>
  );
}
