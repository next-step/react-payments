import React from 'react';

import Router from './router';
import { CardProvider } from './stores/CardContext';

export function App() {
  return (
    <CardProvider>
      <Router />
    </CardProvider>
  );
}
