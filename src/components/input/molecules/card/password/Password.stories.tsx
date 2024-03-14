import { ArgTypes, Meta, StoryObj } from '@storybook/react';
import { Background } from '@/stories/components/Background';
import { Password } from './Password';
import { useForm } from '@/hooks/useForm/useForm';

const meta = {
  title: 'Input/Molecule/Card/Password',
  component: Password,
} as Meta<typeof Password>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicPassword: Story = (args: ArgTypes) => {
  const formMethods = useForm();

  return (
    <Background>
      <Password {...args} formMethods={formMethods} />
    </Background>
  );
};

BasicPassword.args = {};
