import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { CardSelectModalProvider, CardAddFormProvider, CardListProvider } from './context';

import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <CardAddFormProvider>
      <CardSelectModalProvider>
        <CardListProvider>
          <App />
        </CardListProvider>
      </CardSelectModalProvider>
    </CardAddFormProvider>
  </StrictMode>,
);
