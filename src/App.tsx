import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './pages/router';
import { Global } from '@emotion/react';
import { globalStyleCss } from './styles/GlobalStyle';

function App() {
  return (
    <>
      <Global styles={globalStyleCss} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
