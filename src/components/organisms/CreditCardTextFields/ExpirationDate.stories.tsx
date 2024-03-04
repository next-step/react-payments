import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { HFlex } from '@/components/atoms';
import CreditCardTextFields from './index';

const meta = {
  title: 'molecules/CreditCardInputs',
  component: CreditCardTextFields.ExpirationDate,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CreditCardTextFields.ExpirationDate>;

export default meta;

type Story = StoryObj<typeof CreditCardTextFields.ExpirationDate>;

const TextFieldWithHooks = ({ dateType }: { dateType: 'month' | 'year' }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <CreditCardTextFields.ExpirationDate dateType={dateType} value={value} onChange={handleInputChange} />;
};

export const ExpirationDate: Story = {
  render: () => (
    <HFlex className="gap-2">
      <TextFieldWithHooks dateType="month" />
      <TextFieldWithHooks dateType="year" />
    </HFlex>
  ),
};
