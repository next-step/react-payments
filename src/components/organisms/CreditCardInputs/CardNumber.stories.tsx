import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import CreditCardInputs from './index';

const meta = {
  title: 'molecules/CreditCardInputs',
  component: CreditCardInputs.CardNumber,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CreditCardInputs.CardNumber>;

export default meta;

type Story = StoryObj<typeof CreditCardInputs.CardNumber>;

const InputWithHooks = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <CreditCardInputs.CardNumber value={value} onChange={handleInputChange} />;
};

export const CardNumber: Story = {
  render: () => <InputWithHooks />,
};
