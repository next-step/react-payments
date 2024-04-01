import { ArgTypes, Meta, StoryObj } from '@storybook/react';
import { SecurityCode } from './SecurityCode';
import { useForm } from '@/hooks/useForm/useForm';
import { Background } from '@/stories/components/Background';
import { CARD_FIELDS } from '../cardInput.constant';
import { useAutoFocus } from '@/hooks/useAutoFocus/useAutoFocus';
import { CardForm } from '@/pages/Payments/payments.type';

const meta = {
  title: 'Input/Molecule/Card/SecurityCode',
  component: SecurityCode,
} as Meta<typeof SecurityCode>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicSecurityCode: Story = (args: ArgTypes) => {
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
      <SecurityCode
        {...args}
        formMethods={formMethods}
        autoFocusMethods={autoFocusMethods}
      />
    </Background>
  );
};

BasicSecurityCode.args = {};
