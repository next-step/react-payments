import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalLayout from './layout/GlobalLayout.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalLayout>
      <App />
    </GlobalLayout>
  </React.StrictMode>
);
