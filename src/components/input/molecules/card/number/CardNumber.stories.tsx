import { ArgTypes, Meta, StoryObj } from '@storybook/react';
import { useForm } from '@/hooks/useForm/useForm';
import { CardNumber } from './CardNumber';
import { Background } from '@/stories/components/Background';

const meta = {
  title: 'Input/Molecule/Card/Number',
  component: CardNumber,
} as Meta<typeof CardNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardNumberInput: Story = (args: ArgTypes) => {
  const formMethods = useForm();

  return (
    <Background>
      <CardNumber {...args} formMethods={formMethods} />
    </Background>
  );
};

CardNumberInput.args = {};
