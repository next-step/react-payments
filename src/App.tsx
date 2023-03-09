import { Global, ThemeProvider } from '@emotion/react';

import Routes from 'routes';
import { theme } from 'styles/theme';
import { globalStyles } from 'styles/globalStyles';

import CardListProvider from 'contexts/CardListProvider';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <CardListProvider>
        <Routes />
      </CardListProvider>
    </ThemeProvider>
  );
};

export default App;
