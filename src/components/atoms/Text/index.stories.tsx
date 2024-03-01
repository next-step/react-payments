import type { Meta, StoryObj } from '@storybook/react';

import Text from './index';

const meta = {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    className: 'w-44 p-10 border border-dashed border-gray-400',
    children: 'Hello, world!',
  },
};
