import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './app';
import './index.pcss';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
