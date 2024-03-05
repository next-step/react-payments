import type { Meta, StoryObj } from '@storybook/react';

import { HFlex } from '@/components/atoms';
import CreditCardTextFields from './index';
import useCreditCardTextFields from './useCreditCardTextFields';

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
  const { cardInputValue, handleExpirationMonthInputChange, handleExpirationYearInputChange } =
    useCreditCardTextFields();

  if (dateType === 'month') {
    return (
      <CreditCardTextFields.ExpirationDate
        dateType={dateType}
        value={cardInputValue.expirationMonth}
        onChange={handleExpirationMonthInputChange}
      />
    );
  }
  return (
    <CreditCardTextFields.ExpirationDate
      dateType={dateType}
      value={cardInputValue.expirationYear}
      onChange={handleExpirationYearInputChange}
    />
  );
};

export const ExpirationDate: Story = {
  render: () => (
    <HFlex className="gap-2">
      <TextFieldWithHooks dateType="month" />
      <TextFieldWithHooks dateType="year" />
    </HFlex>
  ),
};
