import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { CardProvider } from './store/CardContext';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <CardProvider>
        <App />
      </CardProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
