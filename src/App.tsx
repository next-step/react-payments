import Routes from 'routes';
import { Global, ThemeProvider } from '@emotion/react';
import { theme } from 'styles/theme';
import { globalStyles } from 'styles/globalStyles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
