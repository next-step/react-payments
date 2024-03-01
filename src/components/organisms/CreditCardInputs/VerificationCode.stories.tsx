import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import CreditCardInputs from './index';

const meta = {
  title: 'molecules/CreditCardInputs',
  component: CreditCardInputs.VerificationCode,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CreditCardInputs.VerificationCode>;

export default meta;

type Story = StoryObj<typeof CreditCardInputs.VerificationCode>;

const InputWithHooks = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <CreditCardInputs.VerificationCode value={value} onChange={handleInputChange} />;
};

export const VerificationCode: Story = {
  render: () => <InputWithHooks />,
};
