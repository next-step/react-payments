import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@/styles/index.module.css';
import { GlobalLayout } from './layout/global/Layout.tsx';
import { LAYOUT } from './layout/global/layout.constant.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalLayout type={LAYOUT.TYPE.MOBILE}>
      <App />
    </GlobalLayout>
  </React.StrictMode>
);
