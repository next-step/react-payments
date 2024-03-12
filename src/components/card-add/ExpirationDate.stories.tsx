import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import ExpirationDate from './ExpirationDate';

const expirationDate = {
  month: '12',
  year: '23',
};

const setExpirationDate = () => {};

const meta = {
  title: 'CARD-ADD/ExpirationDate',
  component: ExpirationDate,
} satisfies Meta<typeof ExpirationDate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    expirationDate,
    setExpirationDate,
  },
};
