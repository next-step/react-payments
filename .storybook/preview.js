import { Global, ThemeProvider } from '@emotion/react';
import { theme } from 'styles/theme';
import { globalStyles } from 'styles/globalStyles';

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {Story(context)}
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
