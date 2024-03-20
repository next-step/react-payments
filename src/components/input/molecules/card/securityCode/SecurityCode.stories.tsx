import { ArgTypes, Meta, StoryObj } from '@storybook/react';
import { SecurityCode } from './SecurityCode';
import { useForm } from '@/hooks/useForm/useForm';
import { Background } from '@/stories/components/Background';

const meta = {
  title: 'Input/Molecule/Card/SecurityCode',
  component: SecurityCode,
} as Meta<typeof SecurityCode>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicSecurityCode: Story = (args: ArgTypes) => {
  const formMethods = useForm();

  return (
    <Background>
      <SecurityCode {...args} formMethods={formMethods} />
    </Background>
  );
};

BasicSecurityCode.args = {};
