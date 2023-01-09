import './index.css';
//
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//
import App from './App';
import { RouteProvider } from './contexts';
import Portal from './components/Portal';
import { CardProvider } from './templates/CardAddPage';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Portal.Provider>
      <RouteProvider>
        <CardProvider>
          <App />
        </CardProvider>
      </RouteProvider>
    </Portal.Provider>
  </StrictMode>,
);
