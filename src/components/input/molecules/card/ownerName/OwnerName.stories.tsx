import { ArgTypes, Meta, StoryObj } from '@storybook/react';
import { OwnerName } from './OwnerName';
import { useForm } from '@/hooks/useForm/useForm';
import { Background } from '@/stories/components/Background';

const meta = {
  title: 'Input/Molecule/Card/OwnerName',
  component: OwnerName,
} as Meta<typeof OwnerName>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicOwnerName: Story = (args: ArgTypes) => {
  const formMethods = useForm();

  return (
    <Background>
      <OwnerName {...args} formMethods={formMethods} />
    </Background>
  );
};

BasicOwnerName.args = {};
