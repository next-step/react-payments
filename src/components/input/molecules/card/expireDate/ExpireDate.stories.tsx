import { ArgTypes, Meta, StoryObj } from '@storybook/react';
import { ExpireDate } from './ExpireDate';
import { useForm } from '@/hooks/useForm/useForm';

const meta = {
  title: 'Molecule/Input/ExpireDate',
  component: ExpireDate,
} as Meta<typeof ExpireDate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicExpireDate: Story = (args: ArgTypes) => {
  const formMethods = useForm();

  return <ExpireDate {...args} formMethods={formMethods} />;
};

BasicExpireDate.args = {};
