import { Header } from '@/components';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
  title: 'Example/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    left: { control: 'none' },
    right: { control: 'none' },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <h1>Header</h1>,
  },
};
export const LeftButton: Story = {
  args: {
    children: <h1>Header</h1>,
    left: <button>뒤로가기</button>,
  },
};
export const RightButton: Story = {
  args: {
    children: <h1>Header</h1>,
    right: <button>더보기</button>,
  },
};
export const FullButtons: Story = {
  args: {
    children: <h1>Header</h1>,
    left: <button>뒤로가기</button>,
    right: <button>더보기</button>,
  },
};
