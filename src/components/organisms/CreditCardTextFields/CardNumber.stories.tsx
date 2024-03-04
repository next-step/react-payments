import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import CreditCardTextFields from './index';

const meta = {
  title: 'molecules/CreditCardInputs',
  component: CreditCardTextFields.CardNumber,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CreditCardTextFields.CardNumber>;

export default meta;

type Story = StoryObj<typeof CreditCardTextFields.CardNumber>;

const TextFieldWithHooks = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <CreditCardTextFields.CardNumber value={value} onChange={handleInputChange} />;
};

export const CardNumber: Story = {
  render: () => <TextFieldWithHooks />,
};
