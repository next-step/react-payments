import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from './common/styles';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Global styles={GlobalStyles} />
  </React.StrictMode>,
  document.getElementById('root')
);
