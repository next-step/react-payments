import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@/styles/index.module.css';
import { GlobalLayout } from './layout/global/GlobalLayout.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalLayout.Moblie>
      <App />
    </GlobalLayout.Moblie>
  </React.StrictMode>
);
