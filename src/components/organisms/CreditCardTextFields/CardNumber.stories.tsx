import type { Meta, StoryObj } from '@storybook/react';

import CreditCardTextFields from './index';
import useCreditCardTextFields from './useCreditCardTextFields';

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
  const { cardInputValue, handleCardNumberInputChange } = useCreditCardTextFields();

  return <CreditCardTextFields.CardNumber value={cardInputValue.cardNumber} onChange={handleCardNumberInputChange} />;
};

export const CardNumber: Story = {
  render: () => <TextFieldWithHooks />,
};
