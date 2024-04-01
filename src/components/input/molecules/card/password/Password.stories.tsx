import { ArgTypes, Meta, StoryObj } from '@storybook/react';
import { Background } from '@/stories/components/Background';
import { Password } from './Password';
import { useForm } from '@/hooks/useForm/useForm';
import { CARD_FIELDS } from '../cardInput.constant';
import { useAutoFocus } from '@/hooks/useAutoFocus/useAutoFocus';
import { CardForm } from '@/pages/Payments/payments.type';

const meta = {
  title: 'Input/Molecule/Card/Password',
  component: Password,
} as Meta<typeof Password>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicPassword: Story = (args: ArgTypes) => {
  const formMethods = useForm<CardForm>();
  const fieldAmount = Object.values(CARD_FIELDS).reduce(
    (amount, field) => (amount += Object.values(field).length),
    0
  );
  const autoFocusMethods = useAutoFocus({
    amount: fieldAmount,
  });

  return (
    <Background>
      <Password
        {...args}
        formMethods={formMethods}
        autoFocusMethods={autoFocusMethods}
      />
    </Background>
  );
};

BasicPassword.args = {};
