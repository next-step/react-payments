import { MemoryRouter } from 'react-router-dom';
import GlobalStyles from 'styles/globalStyles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <MemoryRouter>
        <Story />
        <GlobalStyles />
      </MemoryRouter>
    </>
  ),
];
