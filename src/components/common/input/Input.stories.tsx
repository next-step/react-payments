import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import '../../../../styles/input.css';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,

  decorators: [
    (Story) => (
      <div style={{ width: '200px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    boxType: {
      options: ['input-basic', 'input-underline'],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const DefaultInput: Story = {
  args: {
    type: 'text',
    boxType: 'input-basic',
    maxLength: 10,
    name: 'input',
    placeholder: 'placeholder',
  },
};
