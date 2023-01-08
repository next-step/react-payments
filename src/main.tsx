import './index.css';
//
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//
import App from './App';
import { RouteProvider } from './contexts';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouteProvider>
      <App />
    </RouteProvider>
  </StrictMode>,
);
