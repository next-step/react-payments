import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import CardFormDomain from './domains/cardFormDomain';

const domains = {
  cardFormDomain: new CardFormDomain(),
};

ReactDOM.render(
  <React.StrictMode>
    <App domains={domains} />
  </React.StrictMode>,
  document.getElementById('root'),
);
