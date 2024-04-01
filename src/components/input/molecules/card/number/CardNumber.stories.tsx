import { ArgTypes, Meta, StoryObj } from '@storybook/react';
import { useForm } from '@/hooks/useForm/useForm';
import { CardNumber } from './CardNumber';
import { Background } from '@/stories/components/Background';
import { useAutoFocus } from '@/hooks/useAutoFocus/useAutoFocus';
import { CARD_FIELDS } from '../cardInput.constant';
import { CardForm } from '@/pages/Payments/payments.type';

const meta = {
  title: 'Input/Molecule/Card/Number',
  component: CardNumber,
} as Meta<typeof CardNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardNumberInput: Story = (args: ArgTypes) => {
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
      <CardNumber
        {...args}
        formMethods={formMethods}
        autoFocusMethods={autoFocusMethods}
      />
    </Background>
  );
};

CardNumberInput.args = {};
