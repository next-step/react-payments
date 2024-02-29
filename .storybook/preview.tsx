import type { Preview, StoryFn } from '@storybook/react';
import { GlobalStyles } from '../src/shared/styles';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story: StoryFn) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];

export default preview;
