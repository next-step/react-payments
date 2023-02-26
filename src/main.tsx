import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import {
  CardExpirationProvider,
  CardNumberProvider,
  CardOwnerNameProvider,
  CardPasswordProvider,
  CardSecretCodeProvider,
  CardSelectModalProvider,
} from './context';

import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <CardSelectModalProvider>
      <CardExpirationProvider>
        <CardNumberProvider>
          <CardOwnerNameProvider>
            <CardSecretCodeProvider>
              <CardPasswordProvider>
                <App />
              </CardPasswordProvider>
            </CardSecretCodeProvider>
          </CardOwnerNameProvider>
        </CardNumberProvider>
      </CardExpirationProvider>
    </CardSelectModalProvider>
  </StrictMode>,
);
