import React from 'react';

import { CardProvider } from '../src/store/CardContext';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorator = [
  (Story) => (
    <CardProvider>
      <Story />
    </CardProvider>
  ),
];
