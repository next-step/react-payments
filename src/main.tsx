import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import ProviderContainer from './context/provider';

import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ProviderContainer>
      <App />
    </ProviderContainer>
  </StrictMode>,
);
