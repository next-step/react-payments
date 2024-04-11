import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import { NearPaymentsProvider } from '@/card';
import { GlobalStyles } from '@/shared';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <NearPaymentsProvider>
      <App />
    </NearPaymentsProvider>
  </React.StrictMode>,
);
