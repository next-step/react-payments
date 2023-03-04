import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import NewCardProvider from './contexts/NewCardContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <NewCardProvider>
      <App />
    </NewCardProvider>
  </React.StrictMode>,
);
