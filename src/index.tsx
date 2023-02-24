import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CardFormProvider } from './context/CardFormContext';
import { CardListProvider } from './context/CardListContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <CardListProvider>
      <CardFormProvider>
        <App />
      </CardFormProvider>
    </CardListProvider>
  </React.StrictMode>,
);

reportWebVitals();
