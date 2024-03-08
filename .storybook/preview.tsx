import '../src/styles/index.css';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';

const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={['/']}>
      <Story />
    </MemoryRouter>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    toc: true,
    canvas: {
      sourceState: 'shown',
    },
    controls: {
      sort: 'requiredFirst',
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};

export default {
  decorators,
  parameters,
};
