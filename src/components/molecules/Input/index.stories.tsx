import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import Input from './index';

const meta = {
  title: 'molecules/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

const InputWithHooks = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <Input name="input" type="text" value={value} placeholder="Type something..." onChange={handleInputChange} />;
};

export const Basic: Story = {
  render: () => <InputWithHooks />,
};
