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
  CardAliasProvider,
} from './context';
import { CardListProvider } from './context/CardList';

import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <CardSelectModalProvider>
      <CardExpirationProvider>
        <CardNumberProvider>
          <CardOwnerNameProvider>
            <CardSecretCodeProvider>
              <CardPasswordProvider>
                <CardAliasProvider>
                  <CardListProvider>
                    <App />
                  </CardListProvider>
                </CardAliasProvider>
              </CardPasswordProvider>
            </CardSecretCodeProvider>
          </CardOwnerNameProvider>
        </CardNumberProvider>
      </CardExpirationProvider>
    </CardSelectModalProvider>
  </StrictMode>,
);
