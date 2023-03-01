import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '@/router';
import GlobalStyle from '@/styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/colors';
import { CardListProvider } from './store';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CardListProvider>
          <RouterProvider router={router} />
        </CardListProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
