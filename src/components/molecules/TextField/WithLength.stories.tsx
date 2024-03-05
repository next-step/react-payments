import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import TextField from './index';

const meta = {
  title: 'molecules/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof TextField>;

const TextFieldWithHooks = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <TextField
      name="input"
      type="text"
      value={value}
      placeholder="Type something..."
      onChange={handleInputChange}
      label="label"
      lengthLimit={{
        show: true,
        maxLength: 10,
      }}
    />
  );
};

export const WithLength: Story = {
  render: () => <TextFieldWithHooks />,
};
