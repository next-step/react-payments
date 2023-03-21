import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import NewCardProvider from './contexts/NewCardContext';
import ModalProvider from './contexts/ModalContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ModalProvider>
      <NewCardProvider>
        <App />
      </NewCardProvider>
    </ModalProvider>
  </React.StrictMode>,
);