import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { HFlex } from '@/components/atoms';
import CreditCardInputs from './index';

const meta = {
  title: 'molecules/CreditCardInputs',
  component: CreditCardInputs.ExpirationDate,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CreditCardInputs.ExpirationDate>;

export default meta;

type Story = StoryObj<typeof CreditCardInputs.ExpirationDate>;

const InputWithHooks = ({ dateType }: { dateType: 'month' | 'year' }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <CreditCardInputs.ExpirationDate dateType={dateType} value={value} onChange={handleInputChange} />;
};

export const ExpirationDate: Story = {
  render: () => (
    <HFlex className="gap-2">
      <InputWithHooks dateType="month" />
      <InputWithHooks dateType="year" />
    </HFlex>
  ),
};
