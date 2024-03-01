import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import CreditCardInputs from './index';

const meta = {
  title: 'molecules/CreditCardInputs',
  component: CreditCardInputs.CardPassword,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CreditCardInputs.CardPassword>;

export default meta;

type Story = StoryObj<typeof CreditCardInputs.CardPassword>;

const InputWithHooks = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <CreditCardInputs.CardPassword value={value} onChange={handleInputChange} />;
};

export const CardPassword: Story = {
  render: () => <InputWithHooks />,
};
