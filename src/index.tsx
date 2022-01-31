import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from './common/styles';
import { CardProvider } from './context/CardContext';

ReactDOM.render(
  <React.StrictMode>
    <CardProvider>
      <App />
      <Global styles={GlobalStyles} />
    </CardProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
