import type { Meta, StoryObj } from '@storybook/react';

import CreditCardTextFields from './index';
import useCreditCardTextFields from './useCreditCardTextFields';

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
  const { cardInputValue, handleVerificationCodeInputChange } = useCreditCardTextFields();

  return (
    <CreditCardTextFields.VerificationCode
      value={cardInputValue.verificationCode}
      onChange={handleVerificationCodeInputChange}
    />
  );
};

export const VerificationCode: Story = {
  render: () => <TextFieldWithHooks />,
};
