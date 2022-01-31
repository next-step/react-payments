import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
