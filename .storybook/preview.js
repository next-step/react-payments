import { BrowserRouter, Router } from 'react-router-dom';
import { withReactContext } from 'storybook-react-context';
import { CardProvider } from '../src/store/CardContext';
import '../src/styles/index.css';

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
  (Story, context) => (
    <BrowserRouter>
      <CardProvider>
        <Story />
      </CardProvider>
    </BrowserRouter>
  ),
];
