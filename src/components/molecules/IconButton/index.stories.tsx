import ReactIcon from '@assets/react.svg';
import type { Meta, StoryObj } from '@storybook/react';

import IconButton from './index';

const meta = {
  title: 'molecules/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    src: ReactIcon,
    size: 36,
    alt: 'React logo',
  },
};
