import type { Meta, StoryObj } from '@storybook/react';

import OwnerName from './OwnerName';

const ownerName = 'SoJeong';
const setOwnerName = () => {};

const meta = {
  title: 'CARD-ADD/OwnerName',
  component: OwnerName,
} satisfies Meta<typeof OwnerName>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ownerName,
    setOwnerName,
  },
};
