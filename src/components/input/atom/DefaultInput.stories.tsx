import { Meta, StoryObj } from '@storybook/react';
import { DefaultInput } from './DefaultInput';
import { Background } from '@/stories/components/Background';

const meta = {
  title: 'Input/Atom/DefaultInput',
  component: DefaultInput,
  tags: ['autodocs'],
} as Meta<typeof DefaultInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicInput: Story = () => {
  return (
    <Background title='BasicInput' config={{ width: '300px' }}>
      <DefaultInput type='text' />
    </Background>
  );
};

BasicInput.args = {};
