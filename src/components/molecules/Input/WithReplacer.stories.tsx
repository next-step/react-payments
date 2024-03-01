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

  return (
    <Input
      name="input"
      type="text"
      value={value}
      placeholder="you can only type numbers..."
      onChange={handleInputChange}
      label="label"
      lengthLimit={{
        show: true,
        maxLength: 10,
      }}
      replacer={(text) => text.replace(/\D/g, '')}
    />
  );
};

export const WithReplacer: Story = {
  render: () => <InputWithHooks />,
};
