import { ArgTypes, Meta, StoryObj } from '@storybook/react';
import { ExpireDate } from './ExpireDate';
import { useForm } from '@/hooks/useForm/useForm';
import { Background } from '@/stories/components/Background';

const meta = {
  title: 'Input/Molecule/Card/ExpireDate',
  component: ExpireDate,
} as Meta<typeof ExpireDate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicExpireDate: Story = (args: ArgTypes) => {
  const formMethods = useForm();

  return (
    <Background>
      <ExpireDate {...args} formMethods={formMethods} />
    </Background>
  );
};

BasicExpireDate.args = {};
