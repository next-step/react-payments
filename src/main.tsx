import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { MobilePanel } from './components/atoms/index.ts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MobilePanel>
      <App />
    </MobilePanel>
    <div id="portal" />
  </React.StrictMode>
);
