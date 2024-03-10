import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/index.css';
import App from './App.tsx';
import { GlobalLayout } from './layout/global/Layout.tsx';
import { LAYOUT } from './layout/global/layout.constant.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalLayout type={LAYOUT.TYPE.MOBILE}>
      <App />
    </GlobalLayout>
  </React.StrictMode>
);
