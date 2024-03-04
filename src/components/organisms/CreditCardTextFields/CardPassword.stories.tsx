import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import CreditCardTextFields from './index';

const meta = {
  title: 'molecules/CreditCardInputs',
  component: CreditCardTextFields.CardPassword,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CreditCardTextFields.CardPassword>;

export default meta;

type Story = StoryObj<typeof CreditCardTextFields.CardPassword>;

const TextFieldWithHooks = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <CreditCardTextFields.CardPassword value={value} onChange={handleInputChange} />;
};

export const CardPassword: Story = {
  render: () => <TextFieldWithHooks />,
};
