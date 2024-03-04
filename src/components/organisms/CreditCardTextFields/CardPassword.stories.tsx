import type { Meta, StoryObj } from '@storybook/react';

import CreditCardTextFields from './index';
import useCreditCardTextFields from './useCreditCardTextFields';

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
  const { cardInputValue, handleCardPasswordInputChange } = useCreditCardTextFields();

  return (
    <CreditCardTextFields.CardPassword value={cardInputValue.cardPassword} onChange={handleCardPasswordInputChange} />
  );
};

export const CardPassword: Story = {
  render: () => <TextFieldWithHooks />,
};
