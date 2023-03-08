import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { CardProvider } from './store/CardContext';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <CardProvider>
      <App />
    </CardProvider>
  </StrictMode>
);
