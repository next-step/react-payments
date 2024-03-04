import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import CreditCardTextFields from './index';

const meta = {
  title: 'molecules/CreditCardInputs',
  component: CreditCardTextFields.VerificationCode,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CreditCardTextFields.VerificationCode>;

export default meta;

type Story = StoryObj<typeof CreditCardTextFields.VerificationCode>;

const TextFieldWithHooks = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <CreditCardTextFields.VerificationCode value={value} onChange={handleInputChange} />;
};

export const VerificationCode: Story = {
  render: () => <TextFieldWithHooks />,
};
