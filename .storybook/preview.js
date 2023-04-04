import { StepContextProvider } from '../src/context/StepContext';

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
    <StepContextProvider>
      <Story />
    </StepContextProvider>
  ),
];
