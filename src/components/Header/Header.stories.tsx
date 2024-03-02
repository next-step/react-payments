import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  tags: ['autodocs'],
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

const Template: Story = {
  render: ({ children }) => {
    return <Header>{children}</Header>;
  },
};

export const Default: Story = {
  ...Template,
  args: {
    children: '카드추가',
  },
};

export const WithBackButton: Story = {
  args: {
    children: (
      <>
        <a>{'<'}&nbsp;</a>
        <span>카드추가</span>
      </>
    ),
  },
};
